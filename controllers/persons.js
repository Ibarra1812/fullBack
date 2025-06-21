const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/', (request, response, next) => {
  Person.find({}).then((person) => {
    response.json(person)
  }).catch((error) => (next(error)))
})
personsRouter.get('/info', (request, response, next) => {
  Person.find({}).then((person) => {
    if (!person) {
      return response.status(404).send({ error: 'No persons found' })
    }
    if (person.length === 0) {
      response.send('<p>Phonebook is empty</p>' +
        '<p>' + new Date() + '</p>')
    }
    response.send('<p>Phonebook has info for ' + person.length + ' people</p>' +
      '<p>' + new Date() + '</p>')
  }).catch((error) => (next(error)))
})
personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => (
      next(error)
    ))
})
personsRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

personsRouter.put('/:id', (request, response, next) => {
  const { name, number } = request.body
  Person.findByIdAndUpdate(request.params.id, { name, number }, { new: true, runValidators: true, context: 'query' })
    .then((updatedPerson) => {
      response.json(updatedPerson)
    })
    .catch((error) => next(error))
})

const generateId = () => {
  let id
  id = Math.floor(Math.random() * 1e12)
  return id
}
personsRouter.post('/', (request, response, next) => {
  const body = request.body

  const person = new Person({
    id: generateId(),
    name: body.name,
    number: body.number,
  })

  person.save()
    .then((savedPerson) => {
      response.json(savedPerson)
    })
    .catch((error) => next(error))
})


module.exports = personsRouter
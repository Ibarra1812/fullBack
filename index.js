require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
const Person = require('./models/person')

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(express.static('dist'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
}
)
app.get('/api/persons', (request, response) => {
  Person.find({}).then((person) => {
    response.json(person)
  })
})
app.get('/info', (request, response) => {
  response.send('<p>Phonebook has info for ' + person.length + ' people</p>' +
    '<p>' + new Date() + '</p>')
})
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
}
)
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  person = person.filter((p) => p.id !== id)
  response.status(204).end()
}
)
const generateId = () => {
  let id
  do {
    id = Math.floor(Math.random() * 1e12)
  } while (person.some((p) => p.id === id))
  return id
}
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing',
    })
  }
  if (person.some((p) => p.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique',
    })
  }

  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  person = person.concat(newPerson)
  response.json(newPerson)
}
)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
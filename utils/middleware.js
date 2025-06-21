const logger = require('./logger')
var morgan = require('morgan')

morgan.token('body', (req) => JSON.stringify(req.body))
const requestLogger = morgan(':method :url :status :res[content-length] - :response-time ms :body')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map(e => e.message)
    return response.status(400).json({ error: messages.join(', ') })
  }
  next(error)
}
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
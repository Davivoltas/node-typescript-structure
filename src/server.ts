import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World - v1.0' })
})

app.listen(3333)

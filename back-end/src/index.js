'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const email = require('./routes/emailRoute')
const mercadoPago = require('./routes/mercadoPagoRoute')
const curso = require('./routes/cursoRoute')
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

// Routes
app.use('/email', email)
app.use('/mercadoPago', mercadoPago)
app.use('/curso', curso)

const sequalize = require("./model")
const express = require('express')
const app = express()
const helmet = require('helmet')
app.use(helmet())

app.use(express.json())
require('./routes')(app)

const SERVER_PORT = process.env.PORT || 5000
app.listen(SERVER_PORT, () =>
  console.log(`[application] server created in port ${SERVER_PORT}... `)
)
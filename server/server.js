const express = require('express')
const cors = require('cors')
const logger = require ('morgan')
const routes = require('./routes')
const PORT = 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))




app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Park, Restaurant, Ride, Shop } = require('./models')
const routes = require("./routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/rides', async (req, res) => {
  const rides = await Ride.find({})
  res.json(rides)
})
app.get('/park', async (req, res) => {
  const park = await Park.find({})
  res.json(park)
})
app.get('/restaurants', async (req, res) => {
  const restaurants =  await Restaurant.find({})
  res.json(restaurants)
})

app.get('/shops', async (req, res) => {
  const shops = await Shop.find({})
  res.json(shops)
  console.log(shops)
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

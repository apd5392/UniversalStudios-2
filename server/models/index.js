const { model } = require('mongoose')
const ParkSchema = require('./park')
const RestaurantSchema = require('./restaurant')
const RideSchema = require('./ride')
const ShopSchema = require('./shops')
const Ride = model('Ride', RideSchema)
const Park = model('Park', ParkSchema)
const Shop = model('Shop', ShopSchema)
const Restaurant = model('Restaurant', RestaurantSchema)

module.exports = {
  Ride,
  Park,
  Restaurant,
  Shop
}

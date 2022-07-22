const { model } = require("mongoose");
const RestaurantSchema = require("./restaurant");
const ParkSchema = require("./park");
const RideSchema = require("./ride");
const ShopSchema = require("./shop");

const Ride = model("Ride", RideSchema);
const Park = model("Park", ParkSchema);
const Shop = model("Shop", ShopSchema);
const Restaurant = model("Restaurant", RestaurantSchema);

module.exports = {
  Ride,
  Park,
  Restaurant,
  Shop,
};

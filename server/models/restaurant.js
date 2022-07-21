const { Schema } = require('mongoose')

const Restaurant = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    menu: { type: String, required: true },
    about: { type: String, required: true },
    images: { type: String }
  },
  { timestamps: true }
)

module.exports = Restaurant

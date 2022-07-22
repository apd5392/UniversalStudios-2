const { Schema } = require('mongoose')

const Shop = new Schema(
  {
    name: { type: String, required: true },
    about: { type: String, required: true },
    images: { type: String }
  },
  { timestamps: true }
)

module.exports = Shop

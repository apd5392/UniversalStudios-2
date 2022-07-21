const { Schema } = require('mongoose')

const Park = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    parkHours: { type: String, required: true },
    about: { type: String, required: true },
    images: { type: String }
  },
  { timestamps: true }
)

module.exports = Park

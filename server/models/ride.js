const { Schema } = require("mongoose");

const Ride = new Schema(
  {
    ride: { type: String, required: true },
    ride_type: { type: String, required: true },
    requirements: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Ride;

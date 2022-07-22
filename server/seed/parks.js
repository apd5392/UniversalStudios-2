const db = require('../db')
const {Park} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const nPark = {
    name: 'Universal',
    location: "",
    parkHours: "9am -9pm",
    about: "",
    images: ""
  }
  await Park.insertMany(nPark)
  console.log('New Park:', nPark)
}

const run = async () => {
  await main()
  db.close()
}

run()
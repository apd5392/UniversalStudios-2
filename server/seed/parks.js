const db = require('../db')
const {Park} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const nPark = {
    name: 'Universal',
    location: "6000 Universal Blvd, Orlando, FL 32819",
    parkHours: "9am -9pm",
    about: "How would you like to take a photo with Captain America, be catapulted into the sky like the Incredible Hulk, go web-slinging high above the streets with the Amazing Spider-Man or collect unique Marvel souvenirs? Sounds like an epic adventure, right?! You can do all of that and more in Marvel Super Hero Island at Universal Orlando Islands of Adventure. Here is everything you need to know to get your epic adventure started.",
    images: "https://blog.discoveruniversal.com/wp-content/uploads/2019/06/CaptailAmericaAndTeam-MarvelSuperHeroIsland-1.png"
  }
  await Park.insertMany(nPark)
  console.log('New Park:', nPark)
}

const run = async () => {
  await main()
  db.close()
}

run()
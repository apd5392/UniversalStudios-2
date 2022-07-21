const db = require('../db')
const { Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ride1 = [
    {
      ride: 'The Incredible Hulk Coaster',
      ride_type: 'Thrill',
      requirements: 'Minimum Height 54"',
      image:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-incredible-hulk-coaster-universal-dusk-a.jpg'
    },
    {
      ride: 'The Amazing Adventures of Spider-Man',
      ride_type: 'Motion Simulation, 3-D / 4-D Experience',
      requirements:
        'Minimum Height 40”. Under 48” (122 cm) Requires Supervising Companion',
      image:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-amazing-adventures-of-spiderman-ride-screen-a.jpg'
    },
    {
      ride: 'Doctor Dooms Fearfall',
      ride_type: 'Thrill',
      requirements: 'Minimum Height 52”',
      image:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-dr-dooms-fearfall-towers-a.jpg'
    },
    {
      ride: 'Storm Force Accelatron',
      ride_type: 'Kid friendly',
      requirements: 'No Minimum Height',
      image:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-storm-force-accelatron-front-a.jpg'
    },
    {
      ride: 'Kingpins Arcade',
      ride_type: 'Arcade, Kid Friendly',
      requirements: 'Kid Friendly',
      image:
        'https://cache.undercovertourist.com/blog/2022/04/0422-superhero-universal-orlando-kingpin-arcade.jpg'
    }
  ]
  await Ride.insertMany(ride1)
  console.log('New rides!', ride1)
}
const run = async () => {
  await main()
  db.close()
}

run()

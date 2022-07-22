const db = require('../db')
const { Restaurant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const restaurant1 = [
    {
      name: 'Marvel Character Dinner',
      type: 'Dinner',
      menu: '-',
      about:
        'Team-up with your favorite Super Heroes after a day of adventures and defeat the most formidable foe of all—your empty stomach. You are dining at Cafe 4 when in walk Captain America, Spider-Man, Wolverine, Storm and Rogue. This is no ordinary dinner. This is an experience that no true believer can miss.',
      images:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-marvel-character-dinner-spiderman-family-a.jpg'
    },
    {
      name: 'Cafe 4',
      type: 'Quick Service',
      menu: '-',
      about:
        'Avengers Assemble! Superhuman hunger does not stand a chance at this eye-catching eatery. You have found the place where the heroes hang out, and you will see them all over the walls of this star-spangled diner. Enjoy a classic and delicious menu of cheeseburgers, chicken sandwiches, chicken fingers, crispy chicken salads, and more.',
      images:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-cafe-4-universal-inside-a.jpg'
    },
    {
      name: 'Captain America Diner',
      type: 'Quick Service',
      menu: '-',
      about:
        'Avengers Assemble! Superhuman hunger does not stand a chance at this eye-catching eatery. You have found the place where the heroes hang out, and you will see them all over the walls of this star-spangled diner. Enjoy a classic and delicious menu of cheeseburgers, chicken sandwiches, chicken fingers, crispy chicken salads, and more.',
      images: 'Google'
    },
    {
      name: 'Chill Ice Cream',
      type: 'Ice cream/Milkshakes',
      menu: '-',
      about:
        'Even Super Heroes need a snack break—especially Iceman, whose frozen facade stands solid outside this cool walk-up counter. Here, Häagen-Dazs® ice cream is proudly served up just the way you like. Scoop up a sundae, milkshake, ice cream float, or freshly made waffle cone before heading on to your next adventure.',
      images:
        'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-chill-ice-cream-universal-iceman-sign-a.jpg'
    }
  ]
  await Restaurant.insertMany(restaurant1)
  console.log('New cafe', restaurant1)
}

const run = async () => {
  await main()
  db.close()
}

run()

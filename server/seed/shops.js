const db = require('../db')
const { Shop } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = () => {
  const shops = async()=> [{
    name: 'Marvel Alterniverse Store',
    about:
      'If you are always ready to save the day, we got the Marvel Super Hero supplies you need. Stock up on character t-shirts, sweatshirts, toys, collectibles, mugs and more. Plus you might get the chance to have your photo taken with Spider-Man.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-marvel-alterniverse-store-exterior-a.jpg'
  },
  {
    name: 'Comic book store',
    about:
      'POW! Prepare to enter the inner circle of classic comic lore. KA-BLAM! Books and graphic novels line the shelves, packed with the legends that have defined Marvel for over 80 years. You will also find posters, apparel and, of course, official Marvel comics as you snake your way through stacks of stupefying souvenirs.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-comic-book-store-islands-of-adventure-exterior-a.jpg'
  },
  {
    name: 'Marvel Boutique',
    about:
      'The store may be small—hence being a boutique—but ther is so much selection to choose from. You will find something you wont want to leave the park without whether you like to subtly express your passion for comics or wear it loud and proud. This one-of-a-kind shop can be found right in between the larger than life drawings of Doctor Octopus and Storm in Marvel Super Hero Island. You might have a tough time leaving the island with how much cool stuff there is to check out in this hidden gem.',
    image:
      'https://blog.discoveruniversal.com/wp-content/uploads/2018/07/Store-Interior-Wide.jpg'
  },
  {
    name: 'Spider-Man shop',
    about:
      'The moment a shy shutterbug from Forest Hills crossed paths with a radioactive arachnid, he began his transformation into Spider-Man. Created just for fans, this store is stacked with toys, action figures, mugs, t-shirts, and more. You will need your web shooters handy to ensnare all the souvenirs you can carry.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-spider-man-shop-universal-front-a.jpg'
  }]
  await Shop.insertMany(shop)
  console.log('created shop')
  return(shops)
}
const run = async () => {
  await main()
  db.close()
}

run()
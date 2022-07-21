import { useState } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'

const Restaurants = () => {
  const [cafes, setCafe] = useState([])

  const getCafe = async () => {
    const res = await axios.get()
    setCafe(res.data.results)
  }
  getCafe()

  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantCard cafes={cafes} />
    </div>
  )
}

export default Restaurants

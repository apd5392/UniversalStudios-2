import { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'

const Restaurants = () => {
  const [cafes, setCafe] = useState([])

  useEffect(() => {
    const fetchCafe = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/restaurants`)
        setCafe(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCafe()
  }, [])
  return (
    <div className="div">
      <h2>Restaurants</h2>
      <RestaurantCard cafes={cafes} />
    </div>
  )
}

export default Restaurants

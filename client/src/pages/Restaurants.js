import { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'

const Restaurants = (props) => {
  const [cafes, setCafe] = useState([])
  const API = props.API

  useEffect(() => {
    const fetchCafe = async () => {
      try {
        const res = await axios.get(`${API}/restaurants`)
        setCafe(res.data.results)
        console.log(res.data.results)
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

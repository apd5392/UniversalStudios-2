<<<<<<< HEAD
import {useState} from 'react'
=======
import { useState } from 'react'
>>>>>>> b63220bc2917afb6ba6fbe18298bf62b87500d6b
import axios from 'axios'
import RideCard from '../components/RideCard'

const Rides = () => {
  const [rides, setRides] = useState([])

  const getRides = async () => {
    const res = await axios.get()
    setRides(res.data.results)
  }
  getRides()
  return (
    <div className="div">
      <h2>Rides</h2>
      <RideCard rides={rides} />
    </div>
  )
}
export default Rides

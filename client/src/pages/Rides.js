import { useState } from 'react'
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
    <div>
      <h2>Rides</h2>
      <RideCard rides={rides} />
    </div>
  )
}
export default Rides

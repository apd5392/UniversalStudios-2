import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/RideCard'

const Rides = (props) => {
  const [rides, setRides] = useState([])
  const API = props.API

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/rides`)
        setRides(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRides()
  }, [])

  return (
    <div className="div">
      <h2>Rides</h2>
      <RideCard rides={rides} />
    </div>
  )
}
export default Rides

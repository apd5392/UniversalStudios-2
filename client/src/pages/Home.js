import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
  const [parkInfo, setParkInfo] = useState([])
  const API = props.API
  useEffect(() => {
    const fetchParkInfo = async () => {
      try {
        const res = await axios.get(`${API}/park`)
        setParkInfo(res.data.results)
      } catch (error) {
        console.error(error)
      }
    }
    fetchParkInfo()
  }, [])

  return (
    <div>
      {parkInfo.map((park) => (
        <div key={park.name}>
          <h2>{park.name}</h2>
          <h3>Marvel fan? You are at the right place!</h3>
          <h4>Park Hours: {park.parkHours}</h4>
          <h4>{park.location}</h4>
          <p>{park.about}</p>
          <img src={park.images} />
        </div>
      ))}
    </div>
  )
}
export default Home

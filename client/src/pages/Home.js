import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [parkInfo, setParkInfo] = useState([])

  useEffect(() => {
    const fetchParkInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/`)
        setParkInfo(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchParkInfo()
  }, [])

  if (!parkInfo) {
    return <h1>Loading please wait</h1>
  } else {
    return (
      <div>
        {parkInfo.map((park) => (
          <div key={park.name} className="card">
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
}
export default Home

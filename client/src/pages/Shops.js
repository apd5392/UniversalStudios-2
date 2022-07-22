import { useState, useEffect } from 'react'
import axios from 'axios'
import ShopCard from '../components/ShopCard'

const Shops = () => {
  const [shops, setShops] = useState([])
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/shops`)
        console.log(res.data)
        setShops(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchShops()
  }, [])

  return (
    <div className="div">
      <h2>Stores</h2>
      <ShopCard shops={shops} />
    </div>
  )
}
export default Shops

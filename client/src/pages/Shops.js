import { useState } from 'react'
import axios from 'axios'
import ShopCard from '../components/ShopCard'

const Shops = () => {
  const [shops, setShops] = useState([])

  const getShops = async () => {
    const res = await axios.get()
    setShops(res.data.results)
  }
  getShops()
  return (
    <div className="div">
      <h2>Stores</h2>
      <ShopCard shops={shops} />
    </div>
  )
}
export default Shops

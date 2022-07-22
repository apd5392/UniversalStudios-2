import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Rides from './pages/Rides'
import Shops from './pages/Shops'
import Nav from './components/Nav'
const API = 'http.//localhost:3001'

function App() {
  return (
    <div>
      <div className="Nav">
        <h1>Marvel adventure park</h1>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home API={API} />} />
          <Route path="/restaurants" element={<Restaurants API={API} />} />
          <Route path="/rides" element={<Rides API={API} />} />
          <Route path="/shops" element={<Shops API={API} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

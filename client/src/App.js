import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Rides from './pages/Rides'
import Shops from './pages/Shops'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <h1>Marvel adventure park</h1>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/shops" element={<Shops />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

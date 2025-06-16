import { Routes, Route } from 'react-router-dom'
import TowerPage from './Pages/TowerPage/TowerPage'
import FloorPage from './Pages/FloorPage/FloorPage'
import ApartmentPage from './Pages/ApartmentPage/ApartmentPage'
import LayoutDetails from './Pages/LayoutDetails/LayoutDetails'
import Header from './Components/Header'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Header />
       <Routes>
      <Route path="/" element={<TowerPage />} />
      <Route path="/tower/:towerId" element={<FloorPage />} />
      <Route path="/tower/:towerId/floor/:floorId" element={<ApartmentPage />} />
      <Route path="/tower/:towerId/floor/:floorId/apartment/:layoutId" element={<LayoutDetails />} />
    </Routes>
    </div>
  )
}

export default App

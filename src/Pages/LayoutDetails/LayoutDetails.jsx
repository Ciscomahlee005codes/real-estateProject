import React from 'react'
import { useParams } from 'react-router-dom'
import './LayoutDetails.css'
import House1 from '../../assets/House-1.jpg'
import House2 from '../../assets/House-2.jpg'
import House4 from '../../assets/House-4.jpg'
const apartments = [
  {
    id: 1,
    name: "4-Bedroom Duplex Apartment",
    image: House1,
    area: '120 sqm',
    unitType: '3BHK',
    rooms: 4,
  },
  {
    id: 2,
    name: "Top Floor Studio 2 rooms",
    image: House2,
    area: '85 sqm',
    unitType: '2BHK',
    rooms: 3,
  },
  {
    id: 3,
    name: "Max Mansion",
    image: House4,
    area: '150 sqm',
    unitType: '4BHK',
    rooms: 5,
  },
]

const LayoutDetails = () => {
  const { layoutId } = useParams()
  const apartment = apartments.find((apt) => apt.id === parseInt(layoutId))

  if (!apartment) return <p>Apartment not found</p>

  return (
    <div className="layout-details">
      <h2>Apartment Details</h2>
      <img src={apartment.image} alt="Apartment Layout" />
      <div className="metadata">
         <p><strong>Name:</strong> {apartment.name}</p>
        <p><strong>Area:</strong> {apartment.area}</p>
        <p><strong>Unit Type:</strong> {apartment.unitType}</p>
        <p><strong>Rooms:</strong> {apartment.rooms}</p>
      </div>
    </div>
  )
}

export default LayoutDetails

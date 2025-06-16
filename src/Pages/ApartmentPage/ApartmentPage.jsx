import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import House1 from '../../assets/House-1.jpg'
import House2 from '../../assets/House-2.jpg'
import House4 from '../../assets/House-4.jpg'
import './ApartmentPage.css'

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

const ApartmentPage = () => {
  const { towerId, floorId } = useParams()
  const navigate = useNavigate()

  const handleSelectApartment = (layoutId) => {
    navigate(`/tower/${towerId}/floor/${floorId}/apartment/${layoutId}`)
  }

  return (
    <div className="apartment-page">
      <h2>Floor {floorId} - Tower {towerId}</h2>
      <div className="apartment-container">
        {apartments.map((apt) => (
          <div
            key={apt.id}
            className="apartment-card"
            onClick={() => handleSelectApartment(apt.id)}
          >
            <img src={apt.image} alt={`Apartment ${apt.id}`}/>
            <div className="apartment-info">
              <p><strong>Name:</strong> {apt.name}</p>
              <p><strong>Area:</strong> {apt.area}</p>
              <p><strong>Type:</strong> {apt.unitType}</p>
              <p><strong>Rooms:</strong> {apt.rooms}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApartmentPage

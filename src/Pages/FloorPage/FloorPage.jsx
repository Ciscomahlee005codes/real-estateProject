import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineApartment } from "react-icons/md"
import './FloorPage.css'

const FloorPage = () => {
  const { towerId } = useParams()
  const navigate = useNavigate()

  const floors = Array.from({ length: 15 }, (_, i) => i + 1)

  const handleSelectFloor = (floorId) => {
    navigate(`/tower/${towerId}/floor/${floorId}`)
  }

  return (
    <div className="floor-page">
      <h2>Floors in Tower {towerId}</h2>
      <div className="floor-container">
        {floors.map((floor) => (
          <button
            key={floor}
            className="floor-button"
            onClick={() => handleSelectFloor(floor)}
          >
            <MdOutlineApartment size={32} />
            Floor {floor}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FloorPage

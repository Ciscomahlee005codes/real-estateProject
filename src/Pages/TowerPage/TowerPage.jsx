import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TowerPage.css'
import { FaBuilding } from 'react-icons/fa'

const towers = [
  { id: 'A', name: 'Tower A'},
  { id: 'B', name: 'Tower B'},
  { id: 'C', name: 'Tower C'}
]

const TowerPage = () => {
  const navigate = useNavigate()

  const handleSelectTower = (towerId) => {
    navigate(`/tower/${towerId}`)
  }

  return (
    <div className="tower-page">
      <h2>Select a Tower</h2>
      <div className="tower-container">
        {towers.map((tower) => (
          <div
            key={tower.id}
            className="tower-card"
            onClick={() => handleSelectTower(tower.id)}
          >
             <FaBuilding  color="#333" id='tower'/>
            <h3>{tower.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TowerPage

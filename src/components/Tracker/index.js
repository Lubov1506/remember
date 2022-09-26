import React, { useState, useEffect } from 'react'

const Tracker = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0
  })
  const handleMouseMove = ({ clientX, clientY }) => {
    setCoordinates({
      x: clientX,
      y: clientY
    })
  }

  useEffect(()=>{
    document.addEventListener('click', handleMouseMove) 
    return ()=>{
      document.removeEventListener('click', handleMouseMove)
    }
  })

  return (
    <div
      style={{ height: '100vh', border: '4px solid red' }}

    >
      <h1>Mouse tracker</h1>
      <h2>x: {coordinates.x}</h2>
      <h2>y: {coordinates.y}</h2>
    </div>
  )
}

export default Tracker

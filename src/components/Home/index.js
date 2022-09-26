import React, { useState } from 'react'

const Home = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0
  })
  const [counter, setCounter] = useState(0)
  const handleMouseMove = ({ clientX, clientY }) => {
    setCoordinates({
      x: clientX,
      y: clientY
    })
  }
  const clickHandler = () => {
    setCounter(counter+1)
  }

  return (
    <div
      style={{ height: '100vh', border: '4px solid red' }}
      onMouseMove={handleMouseMove}
      onClick={clickHandler}
    >
      <h1>Mouse tracker</h1>
      <h2>x: {coordinates.x}</h2>
      <h2>y: {coordinates.y}</h2>
      <h2>Counter: {counter}</h2>
    </div>
  )
}

export default Home

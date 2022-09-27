import React, { useState, useContext } from 'react'
import StopWatch from '../StopWatch'
import Tracker from '../Tracker'
import { UserContext } from '../../contexts'

const Home = () => {
  const [isVisible, setVisibility] = useState(true)
  const [userValue, setUserValue] = useContext(UserContext)
  const handler = () => {
    setVisibility(!isVisible)
  }
  return (
    <div>
      <button onClick={handler}>click</button>

      <h1>{userValue.name}</h1>
      <h1>{userValue.id}</h1>

      {/*             {isVisible && <StopWatch/>} */}
    </div>
  )
}

export default Home

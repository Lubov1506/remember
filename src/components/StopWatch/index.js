import React, { useState, useEffect } from 'react'
import {format, addSeconds} from 'date-fns'

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0))
  const [isRunning, setIsRunning] = useState(true)
  const switchRunning = () => {
    setIsRunning(!isRunning)
  }
  let id = null
  useEffect(() => {
    if(isRunning){
    id = setTimeout(() => {
      setTime(time => addSeconds(time, 1))
    }, 1000)
    return () => {
        clearTimeout(id)
    }}
  }, [isRunning,time])
  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchRunning}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={()=>{setTime(new Date(0,0,0,0,0,0))}}>Reset</button>
    </div>
  )
}

export default StopWatch

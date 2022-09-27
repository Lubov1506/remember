import React, { useState, useEffect } from 'react'
import { useClicker } from '../../hooks/useClicker'

const Clicker = () => {

  const counter = useClicker()
  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button>Click</button>
    </div>
  )
}

export default Clicker

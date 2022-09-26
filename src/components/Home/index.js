import React, { useState } from 'react'

const Home = () => {
  const [counter, setCounter] = useState(0)
  const [step, setStep] = useState(1)

  const handler = () => {
    setCounter(counter + step)
  }
  const changeHandler = event => {
    event.preventDefault()
    const { value } = event.target
    setStep(Number(value))
  }

  return (
    <div>
      <h1>{counter}</h1>
      <input type='range' name='step' value={step} onChange={changeHandler} />
      <button onClick={handler}>Click</button>
    </div>
  )
}

export default Home

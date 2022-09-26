import React, { useState, useEffect } from 'react'

const Clicker = () => {
  const [counter, setCounter] = useState(0)
const [step, setStep] = useState(1)

  useEffect(() => {
    const increment = () => {
        console.log('clicker');
      setCounter(prevCounter => prevCounter + step)
    }
    document.body.addEventListener('click', increment)
    console.log('навесили');
    return () => {
      document.body.removeEventListener('click', increment)
    console.log('сняли');

    }
  }, [step])
const changeHandler = ({target: {value}}) =>{
    setStep(Number(value))
}
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input type='number' value={step} onChange={changeHandler}/>
      <button>Click</button>
    </div>
  )
}

export default Clicker

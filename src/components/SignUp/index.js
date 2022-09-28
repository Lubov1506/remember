import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
  const { name, value } = action
  return {
    ...state,
    [name]: value
  }
}

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: ''
  })
  const handleChange = ({ target: { name, value } }) => {
    dispatch({ name, value })
  }

  /*     const handleChange = ({target: {name, value}}) =>{
        const action = {name, value}
        dispatch(action)
    } */
  return (
    <form>
      <input type='text' name='firstName' onChange={handleChange} />
      <input type='text' name='lastName' onChange={handleChange} />
      <input type='text' name='email' onChange={handleChange} />
      <input type='password' name='password' onChange={handleChange} />
      <input type='date' name='birthday' onChange={handleChange} />
      <input type='text' name='gender' onChange={handleChange} />
    </form>
  )
}

export default SignUp

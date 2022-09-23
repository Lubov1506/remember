import React, { Component } from 'react'

import { SIGN_UP_SCHEMA } from '../../utils/validationSchema'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...initialValues
    }
  }

  handlerInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    const data = this.state
    console.log(SIGN_UP_SCHEMA.isValidSync(data));

  }
  render () {
    const { firstName, lastName, email, password } = this.state
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={this.handlerInput}
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={this.handlerInput}
        />
        <input
          type='text'
          name='email'
          value={email}
          onChange={this.handlerInput}
        />

        <input
          type='text'
          name='password'
          value={password}
          onChange={this.handlerInput}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default SignUpForm

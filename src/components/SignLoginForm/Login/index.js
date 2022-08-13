import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  inputHhandler = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  submit=()=>{
    this.props.sendData(this.state)
  }
  render () {
    const { email, password } = this.state
    return (
      <>
        <div className='container'>
          <h3 className='header'>Welcome Back!</h3>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={this.inputHhandler}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.inputHhandler}
          />
          <button className='submit-button' onClick={this.submit}>Log In</button>
        </div>
      </>
    )
  }
}

export default Login

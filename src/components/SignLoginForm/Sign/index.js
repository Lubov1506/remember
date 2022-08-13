import React, { Component } from 'react'

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state={
      firstName:'',
      lastName: '',
      email:'',
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
    this.reset()
  }
  reset=()=>{
    this.setState({
      firstName:'',
      lastName: '',
      email:'',
      password: ''
    })
  }
  render () {
    const {firstName, lastName, email, password} = this.state
    return (
      <>
        <div className='container'>
          <h3 className='header'>Sign Up for Free</h3>
          <div className='names'>
            <input type='text' placeholder='First Name' name='firstName' value={firstName} onChange={this.inputHhandler}/>
            <input type='text' placeholder='Last Name' name='lastName' value={lastName} onChange={this.inputHhandler}/>
          </div>
          <input type='email' placeholder='Email Address' name='email' value={email} onChange={this.inputHhandler}/>
          <input type='password' placeholder='Password' name='password' value={password} onChange={this.inputHhandler}/>
          <button className='submit-button' onClick={this.submit}>Get Started</button>
        </div>
      </>
    )
  }
}

export default Sign

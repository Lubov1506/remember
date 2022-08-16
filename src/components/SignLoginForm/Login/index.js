import React, { Component } from 'react'
import styles from '../SignLoginForm.module.scss';

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
        <div className={styles['container']}>
          <h3 className={styles['header']}>Welcome Back!</h3>
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
          <button className={styles['submit-button']} onClick={this.submit}>Log In</button>
        </div>
      </>
    )
  }
}

export default Login

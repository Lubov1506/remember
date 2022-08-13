import React, { Component } from 'react'
import Login from './Login'
import Sign from './Sign'
import './SignLoginForm.css'
import 'animate.css'

class SignLoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      view: true
    }
  }
  buttonToggle = event => {
    const { name } = event.target
    if (name === 'signUp') {
      this.setState({
        view: true
      })
    } else if (name === 'logIn') {
      this.setState({
        view: false
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.view === nextState.view){
      return false
    }
    return true
  }
  getDataFromChild = (data) =>{
    console.log(data);
  }
  render () {
    const { view } = this.state
    return (
      <div className='overlay'>
        <section className='form-container'>
          <div className='control-btn '>
            <button
              className={view ? 'button-on' : 'button-off'}
              onClick={this.buttonToggle}
              name='signUp'
            >
              Sign Up
            </button>
            <button
              className={view ? 'button-off' : 'button-on'}
              onClick={this.buttonToggle}
              name='logIn'
            >
              Log In
            </button>
          </div>
          {view ? <Sign sendData={this.getDataFromChild} className='animate__fadeIn'/> : <Login sendData={this.getDataFromChild} />}
        </section>
      </div>
    )
  }
}

export default SignLoginForm

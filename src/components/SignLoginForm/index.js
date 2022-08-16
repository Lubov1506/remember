import React, { Component } from 'react'
import Login from './Login'
import Sign from './Sign'
import styles from './SignLoginForm.module.scss'
import 'animate.css'
import cx from 'classnames'

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
      <div className={styles['overlay']}>
        <section className={cx(styles['form-container'], 'animate__animated', 'animate__fadeIn')}>
          <div className={styles['control-btn']}>
            <button
              className={cx({
                [styles['button-on']]: view,
                [styles['button-off']]: !view,
              })}
              onClick={this.buttonToggle}
              name='signUp'
            >
              Sign Up
            </button>
            <button
              className={cx({
                [styles['button-on']]: !view,
                [styles['button-off']]: view,
              })}
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

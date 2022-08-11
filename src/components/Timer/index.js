import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.timerId = null
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    if(this.state.count>=5){
        return false
    }
    return true
  }
  componentWillUnmount () {
    console.log('componentWillUnmount');
    clearInterval(this.timerId)
  }
  start = () => {
    this.timerId = setInterval(() => {
        console.log('interval');
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
    console.log(this.timerId);
  }
  render () {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.start}>Start</button>
      </>
    )
  }
}

export default Timer

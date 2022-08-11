import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: new Date(0,0,0,0)
    }
    this.timerId = null
  }
  componentDidMount(){
    this.start()
  }

  tick = () =>{
    const {count} = this.state;
    this.setState((state, props) => {
        const {count} = state;
        const newDate = new Date(count.setSeconds(count.getSeconds()+1));
        return {count: newDate}
    })
    this.timerId =  setTimeout(this.tick, 1000);
}
  start = () => {
    if(!this.timerId){
        this.tick()
    }
  }
  stop=()=>{
clearTimeout(this.timerId)
this.timerId = null
  }
  reset=()=>{
    this.stop()
    this.setState({
    count: new Date(0,0,0,0)        
    })

  }
  render () {
    const {count} = this.state

    return (
        <>
        <h1>{count.toLocaleTimeString()}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
        </>
    )
  }
}

export default Timer

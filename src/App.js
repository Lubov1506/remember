import React from 'react'
import './App.css'

import Timer from './components/Timer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timerMount: true
    }
  }

  render () {
    if (this.state.timerMount) {
      return (
        <>
          <button
            onClick={() => {
              this.setState({ timerMount: !this.state.timerMount })
            }}
          >Mount timer</button>
          <div>
            <Timer />
          </div>
        </>
      )
    } else {
      return (
        <button
          onClick={() => {
            this.setState({ timerMount: !this.state.timerMount })
          }}
        >
          Mount timer
        </button>
      )
    }
  }
}

export default App

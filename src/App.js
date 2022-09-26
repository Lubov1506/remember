import React, { Component } from 'react'
import Clicker from './components/Clicker'
import Home from './components/Home'
import Tracker from './components/Tracker'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Clicker />
  }
}

export default App

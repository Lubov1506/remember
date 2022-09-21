import React, { Component } from 'react'
import Header from './components/Header'
import Tree from './components/Tree'
import { UserContext } from './contexts'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Ivanov',
        img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      }
    }
  }
  logOut = () => {
    this.setState({
      user: {}
    })
  }
  render () {
    return (
      <UserContext.Provider value={[this.state.user, this.logOut]}>
        <Header />
        <Tree user={this.state.user} />
      </UserContext.Provider>
    )
  }
}

export default App

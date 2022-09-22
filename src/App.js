import React, { Component } from 'react'
import Header from './components/Header'
import Tree from './components/Tree'
import { UserContext, ThemeContext } from './contexts'
import CONSTANTS from './constants'
const {THEMES} = CONSTANTS

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Ivanov',
        img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      },
      theme: THEMES.DARK
    }
  }
  logOut = () => {
    this.setState({
      user: {}
    })
  }
  setTheme = theme =>{
    this.setState({
      theme
    })
  }
  render () {
    const {user, theme}=this.state
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
      <UserContext.Provider value={[user, this.logOut]}>
        <Header />
        <Tree user={user} />
      </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App

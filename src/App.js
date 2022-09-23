import React, { Component } from 'react'
import SignUpForm from './components/SignUpForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <SignUpForm />
  }
}

export default App
/* 
      <ThemeContext.Provider value={[theme, this.setTheme]}>
      <UserContext.Provider value={[user, this.logOut]}>
        <Header />
        <TreeWithTheme user={user} />
      </UserContext.Provider>
      </ThemeContext.Provider> */

import React, { useState } from 'react'
import Clicker from './components/Clicker'
import Home from './components/Home'
import { UserContext } from './contexts'
import Tracker from './components/Tracker'

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe'
  })
  return (
    <div>
      <UserContext.Provider value={user}>
        <Home />
      </UserContext.Provider>
    </div>
  )
}

export default App

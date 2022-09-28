import React, { useState } from 'react'
import Clicker from './components/Clicker'
import Home from './components/Home'
import { UserContext,ThemeContext } from './contexts'
import Tracker from './components/Tracker'
import Tree from './components/Tree'
import CONSTANTS from './constants'
import Loader from './components/Loader'
import CounterExample from './components/CounExample'
const {THEMES} = CONSTANTS

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT)

  return (
    <div>
      <ThemeContext.Provider value={ [theme, setTheme]}>
        <CounterExample />
      </ThemeContext.Provider>
    </div>
  )
}

export default App

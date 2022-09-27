import React, { useState, useEffect, useContext, useCallback } from 'react'
import { ThemeContext } from '../../contexts'
import CONSTANTS from '../../constants'
import HomeChild from './HomeChild'
const { THEMES } = CONSTANTS

const stylesMap = {
  [THEMES.LIGHT]: {
    backgroundColor: 'white',
    color: 'black'
  },
  [THEMES.DARK]: {
    backgroundColor: 'black',
    color: 'white'
  }
}

const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const [value, setValue] = useState(1)
  /*   const switchTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  } */
  const switchTheme = useCallback(() => {
    setTheme(theme => (theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))
  }, [])
  
  /*   const logValue = ()=>console.log(value); */
  const logValue = useCallback(() => {
    console.log(value)
  }, [value])
  useEffect(() => {
    console.log('function was created')
  }, [logValue])

  /*   const changeValue = ({target:{value}})=>{
    setValue(Number(value))
  } */
  const changeValue = useCallback(({ target: { value } }) => {
    setValue(Number(value))
  }, [])

  return (
    <>
      <div style={stylesMap[theme]}>
        <button onClick={switchTheme}>switch</button>
        <input type='number' value={value} onChange={changeValue} />
        <h1>Home</h1>
        <HomeChild callback={logValue} />
      </div>
    </>
  )
}

export default Home

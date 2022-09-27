import React, {useContext} from 'react'
import Parent from './Parent'
import { ThemeContext } from '../../contexts'
import style from './Tree.module.css'
import cx from 'classnames'
import CONSTANTS from '../../constants'
import { withTheme } from '../../HOCs'
const {THEMES}= CONSTANTS

const Tree = (props)=>{
  const [theme, setTheme] = useContext(ThemeContext)
  const nextTheme = theme ===THEMES.DARK?THEMES.LIGHT:THEMES.DARK
  const classnames= cx(style.container,{
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK
  })
  return  (
    <div className={classnames}>
      <button onClick={()=>{setTheme(nextTheme)}}>toggle</button>
Tree <Parent />
</div>)
}

export default Tree


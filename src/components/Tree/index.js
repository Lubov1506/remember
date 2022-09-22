import React from 'react'
import Parent from './Parent'
import { ThemeContext } from '../../contexts'
import style from './Tree.module.css'
import cx from 'classnames'
import CONSTANTS from '../../constants'
import { withTheme } from '../../HOCs'
const {THEMES}= CONSTANTS

const Tree = (props)=>{
  const {theme}= props
  const classnames= cx(style.container,{
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK
  })
  return  (
    <div className={classnames}>
Tree <Parent />
</div>)
}

const TreeWithTheme = withTheme(Tree)
export default TreeWithTheme


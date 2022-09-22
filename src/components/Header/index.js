import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../../contexts'
import style from './Header.module.css'
import cx from 'classnames'
import CONSTANTS from '../../constants'
import Switch from '@mui/material/Switch'
import { withTheme, withUser } from '../../HOCs'
const { THEMES } = CONSTANTS

class Header extends Component {
  render () {
    const { theme, setTheme, user, userLogout } = this.props
    const classnames = cx(style.container, {
      [style.lightTheme]: theme === THEMES.LIGHT,
      [style.darkTheme]: theme === THEMES.DARK
    })
    const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    return (
      <div className ={classnames}>
        <Switch
          checked={theme === THEMES.DARK}
          onChange={() => {
            setTheme(nextTheme)
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <img src={user.img} style={{ width: '45px' }} />
        {user.firstName} {user.lastName}
        <button onClick={userLogout}>LogOut</button>
      </div>
    )
  }
}

const HeaderWithTheme = withTheme(Header)
const HeaderWithUserWithTheme = withUser(HeaderWithTheme)
export default HeaderWithUserWithTheme

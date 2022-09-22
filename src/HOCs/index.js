import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../contexts'

export const withTheme = WrapperComponent => {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <WrapperComponent theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    )
  }
}
export const withUser = WrapperComponent => {
  return class WrapperComponentWithUser extends Component {
    render () {
      return (
        <UserContext.Consumer>
          {([user, userLogout]) => (
            <WrapperComponent
              user={user}
              userLogout={userLogout}
              {...this.props}
            />
          )}
        </UserContext.Consumer>
      )
    }
  }
}

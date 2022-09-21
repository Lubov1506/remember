import React, { Component } from 'react'
import { UserContext } from '../../contexts'
class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {contextValue => {
          const [user, userLogout] = contextValue
          return (
            <div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                border: '2px solid black',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '10px'
              }}
            >
              <img src={user.img} style={{ width: '45px' }} />
              {user.firstName} {user.lastName}
              <button onClick={userLogout}>LogOut</button>
            </div>
          )
        }}
      </UserContext.Consumer>
    )
  }
}

export default Header

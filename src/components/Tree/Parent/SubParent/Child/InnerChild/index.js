import React from 'react'
import { UserContext } from '../../../../../../contexts'

const InnerChild = props => {
  /* return (
    <UserContext.Consumer>
      {contextValue => {
        const [user, userLogout] = contextValue */
  return (
    <div style={{ border: '2px solid black', padding: '25px' }}>
      <p>InnerChild</p>
      {/*   <img src={user.img} style={{ width: '45px' }} />
          {user.firstName} {user.lastName}  */}
    </div>
  )
  /*       }}
    </UserContext.Consumer>
  ) */
}

export default InnerChild

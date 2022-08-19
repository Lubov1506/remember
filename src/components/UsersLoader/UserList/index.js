import React from 'react'
import UserCard from '../UserCard'

const UserList = props => {
  const { users } = props
const cardArray = users.map(user => {
    const {
      name: { first, last },
      picture: { medium },
      login: { uuid },
      email,
      location: { city }
    } = user
    return (
      <UserCard key={uuid}>
        <img src={medium} />
        <h3>
          {first} {last}
        </h3>
        <p>{email}</p>
        <p>{city}</p>
      </UserCard>
    )
  })
  return (
    <ul>
        {cardArray}
    </ul>
  )
}

export default UserList

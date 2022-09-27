import React, { useState, useEffect } from 'react'
import { getUsers } from '../../api'

const Loader = () => {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])
  return (
    <>
      {isFetching && <div>Loading</div>}
      {error && <div> SOME ERROR</div>}
      <ol>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ol>
    </>
  )
}

export default Loader

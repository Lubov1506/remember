import React, { useReducer, useEffect } from 'react'
import styles from './PhoneBook.module.css'
import { reducer } from './reducer'
import { getUsers } from '../../api'
import UsersList from './UsersList'

const PhoneBook = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: []
  })
  useEffect(() => {
    getUsers().then(data => {
      dispatch({
        type: 'DATA_LOAD_SUCCESS',
        data
      })
    })
    .catch((error)=>{
        dispatch({
            type: 'DATA_LOAD_ERROR',
            error
        })
    })
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles['phone-book']}>
        <UsersList users={state.users} />
      </div>
    </section>
  )
}

export default PhoneBook

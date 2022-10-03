import React, { useEffect, useState, useReducer } from 'react'
import { getUsers } from '../../api'
import CurrentUserPhone from './CurrentUserPhone'
import styles from './UsersPhoneBook.module.css'
import {reducer} from './reducer'
import UsersList from './UsersList'

const UsersPhoneBook = () => {
const [state, dispatch] = useReducer(reducer, {
    users: [],
    currentUser: null
})
useEffect(()=>{
    getUsers().then(data=>{
        dispatch({
            type : "USERS_DATA_SUCCESS_LOAD",
            data
        })
    })

}, [])


  return (
    <section className={styles.container}>
      <div className={styles['phone-book']}>
    <UsersList users={state.users}/>
      </div>
      <CurrentUserPhone />
    </section>
  )
}

export default UsersPhoneBook

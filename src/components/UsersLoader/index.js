import React, { Component } from 'react'
import { getUsers } from '../../api'
import UserList from './UserList'
import styles from './UserLoader.module.css'

class UsersLoader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      isFetching: false,
      isError: false,
      page: 1
    }
  }
  componentDidMount = () => {
    this.load()
  }
  prev = () => {
    this.setState(({ page }) => ({ page: page - 1 }))
  }
  next = () => {
    this.setState(({ page }) => ({ page: page + 1 }))
  }
  load = () => {
    const { page } = this.state
    getUsers({ page })
      .then(data => {
        this.setState({
          users: data.results
        })
      })
      .catch(error => {
        this.setState({
          isError: true
        })
      })
      .finally(() => {
        this.setState({
          isFetching: false
        })
      })
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state
    if (prevState.page !== page) {
      this.load()
    }
  }
  render () {
    console.log('render')
    const { users, isFetching, isError } = this.state

    return (
      <>
        {isError ? <div>Error</div> : null}
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
        <UserList users={users} prev={this.prev} next={this.next} />
        {isFetching && <div className={styles['loader']}>Loading...</div>}
      </>
    )
  }
}

export default UsersLoader

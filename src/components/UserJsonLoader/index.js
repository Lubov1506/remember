import React, { Component } from 'react'

class UserJsonLoader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      isFetching: true,
      isError: false
    }
  }
  componentDidMount () {
    this.load()
  }
  load = () => {
    fetch('/user.json')
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        })
      })
      .catch(() => {
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
  render () {
    const { users, isFetching, isError } = this.state
    return (
      <>
        {isFetching && <div>Loading</div>}
        {isError && <div> SOME ERROR</div>}
        <ol>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </>
    )
  }
}

export default UserJsonLoader

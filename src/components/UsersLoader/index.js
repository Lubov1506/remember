import React, { Component } from 'react'
import { getUsers
 } from '../../api'
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
    this.setState((state, props) => ({ page: state.page - 1 }))
  }
  next = () => {
    this.setState((state, props) => ({ page: state.page + 1 }))
  }
  load=()=>{
    const { page } = this.state
    getUsers(page)
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
  componentDidUpdate=(prevProps, prevState)=>{
    const { page } = this.state
    if(prevState.page!== page){
       this.load()
    }

  }
  render () {
    console.log('render');
    const { users, isFetching, isError } = this.state
    const usersArray = users.map((user,id) => {
      return <li key={id}>{JSON.stringify(user, null, 4)}</li>
    })
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {isError ? <div>Error</div> : null}
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
        <ul>{usersArray}</ul>
      </>
    )
  }
}

export default UsersLoader

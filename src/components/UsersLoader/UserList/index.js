import React from 'react'
import UserCard from '../UserCard'

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      filterInput: '',
      defaultUsersArray: this.props.users,
      filteredUsers: this.props.users
    }
  }
  handleInput =(event)=>{
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
 
  }
  componentDidUpdate(prevProps, prevState){
    const {filterInput} = this.state
    if(prevState.filterInput !== filterInput){
      this.filter()
    }
  }

  filter = () => {
    const { filterInput, defaultUsersArray } = this.state;
    const filteredArray = defaultUsersArray.filter(user => {
      const {
        name: { first, last },
      } = user;
      return first.includes(filterInput);
    });
    this.setState({
      filteredUsers: filteredArray,
    });
  };


  renderCard =() => this.state.filteredUsers.map(user => {
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
  render(){
    console.log(this.state.filteredUsers);

  const inlineStyles = {
    display: 'flex',
    flexFlow: 'row wrap'
  }
  const {prev, next} = this.props 
  return (
    
    <>
      <h1>Users List</h1>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <input type='text' name='filterInput' onChange={this.handleInput}/>
      <ul style={inlineStyles}>{this.renderCard()}</ul>
    </>
  )}
}

export default UserList

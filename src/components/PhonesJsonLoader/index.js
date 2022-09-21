import React, { Component } from 'react'

class PhonesJsonLoader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phones: [],
      isFetching: true,
      isError: false
    }
  }
  render () {
    const { phones, isFetching, isError } = this.state
    return (
      <>
        {isFetching && <div> Loading ...</div>}
        {isError && <div>ERROR</div>}
        <ol>
          {phones.map(phone => (
            <li key={phone.id}>
              {phone.model} - {phone.price}
            </li>
          ))}
        </ol>
      </>
    )
  }
}

export default PhonesJsonLoader

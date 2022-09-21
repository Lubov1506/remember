import React, { Component } from 'react'
import DataProvider from '../../components/DataProvider'

class LoaderPage extends Component {
  render () {
    return (
      <>
<DataProvider loadData={()=>{
  return fetch('/user.json').then(res=>res.json())
}}
render={(state)=>{
  return (
    <>
      {state.isFetching && <div> Loading ...</div>}
      {state.isError && <div>ERROR</div>}
      <ol>
        {state.data.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ol>
    </>
  )
}}/>
<DataProvider loadData={()=>{
  return fetch('/phones.json').then(res=>res.json())
}} render={(state)=>{
  return (
    <>
      {state.isFetching && <div> Loading ...</div>}
      {state.isError && <div>ERROR</div>}
      <ol>
        {state.data.map(phone => (
          <li key={phone.id}>
            {phone.model} - {phone.price}
          </li>
        ))}
      </ol>
    </>
  )
}}/>
      </>
    )
  }
}

export default LoaderPage

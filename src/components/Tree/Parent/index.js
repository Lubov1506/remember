import React from 'react'
import SubParent from './SubParent'
const Parent = props => {
  return (
    <div style={{ border: '2px solid black', padding: '25px' }}>
      Parent
      <SubParent />
    </div>
  )
}

export default Parent

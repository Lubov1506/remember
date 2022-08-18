import React from 'react'

const SideBar = (props) => {
    const inlineStyles={
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        justifyContent: 'space-between',
        backgroundColor: 'azure',

    }
  return (
    <div style={inlineStyles}>
      <p>Main page</p>
      <p>Second page</p>
      <p>Third page</p>
      <p>Fourth page</p>
      <p>Your user account</p>
      {props.children}
    </div>
  )
}

export default SideBar

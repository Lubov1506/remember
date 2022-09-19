import React from 'react'

function App (props) {
  return (
    <>
      <p>
        <button
          onClick={() => {
            window.close()
          }}
        >Close</button>
         <button
          onClick={() => {
            window.open('http://google.com')
          }}
        >Open</button>
      </p>
      <p>
        <button
          onClick={() => {
            window.location.assign('https://code.visualstudio.com/docs/?dv=linux64_deb')
          }}
        >Assign</button>
         <button
          onClick={() => {
            window.location.reload()
          }}
        >Reload</button>
        <button
          onClick={() => {
            window.location.replace('http://google.com')
          }}
        >Replace</button>
      </p>
    </>
  )
}

export default App

import React from 'react'
import '../SureModal.css'

const ConfirmModal = props => {
  function clicker (event) {
    props.callbackForChild(event.target.value)
  }
  return (
    <div className='backend'>
      <section className='modal-window'>
        <header className='header'>
          <h3>Are you sure?</h3>
        </header>
        <main className='foot'>
          <button onClick={clicker} value='No'>
            No
          </button>
          <button onClick={clicker} value='Yes'>
            Yes
          </button>
        </main>
      </section>
    </div>
  )
}

export default ConfirmModal

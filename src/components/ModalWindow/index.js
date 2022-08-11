import React, { Component } from 'react'
import './ModalWindow.css'
class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: true
    }
  }
  clickHandler = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const {isOpen}=this.state
    if(isOpen){
    return (
      <div className='backend'>
        <section className='modal-window'>
          <header className='modal-header'>
            <button className='close-button' onClick={this.clickHandler}>X</button>
          </header>
          <main className='modal-main'>
            <h3>Success Header</h3>
            <p>Success Text</p>
            <button className='okay-button' onClick={this.clickHandler}>Okay</button>
          </main>
        </section>
      </div>
    )
  }}
}

export default ModalWindow

import React, { Component } from 'react'
import ConfirmModal from './ConfirmModal'
import './SureModal.css'

class SureModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }
  responseForChild = values => {
    console.log(values)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const { isOpen } = this.state
    if (isOpen) {
      return (
        <>
          <button
            onClick={() => {
              this.setState({ isOpen: !isOpen })
            }}
          >
            SureModal
          </button>
          <ConfirmModal callbackForChild={this.responseForChild} />
        </>
      )
    } else {
      return (
        <button
          onClick={() => {
            this.setState({ isOpen: !isOpen })
          }}
        >
          SureModal
        </button>
      )
    }
  }
}

export default SureModal

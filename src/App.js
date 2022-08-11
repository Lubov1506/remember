import React from 'react'
import './App.css'
import SureModal from './components/SureModal'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpenSureModal: true
    }
  }
  openModal = () => {
    this.setState({
      isOpenSureModal: !this.state.isOpenSureModal
    })
  }
  render () {
    return<>
    <SureModal/>
    </>
  }
}

export default App

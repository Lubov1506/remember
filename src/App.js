import React from 'react'
import FlexContainer from './components/FlexContainer'
import ImageWrapper from './components/ImageWrapper'

class App extends React.Component {
  render () {
    return (
      <ImageWrapper width='300px' height='150px' onClick={()=>{alert('Click')}}>
        <img
          width='100%'
          src='https://st3.depositphotos.com/1658575/18194/i/450/depositphotos_181944202-stock-photo-hourglass-sunrise-outside.jpg'
          alt='img'
        />
      </ImageWrapper>
    )
  }
}

export default App

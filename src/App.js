import React from 'react'
import FlexContainer from './components/FlexContainer'

class App extends React.Component {
  render () {
    return (
        <FlexContainer flexDirection='column-reverse'
        justifyContent='space-around'
        alignItems='end'>
          <div>1</div>
          <div>2</div>
          <div>3</div>         
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          </FlexContainer>
    )
  }
}

export default App

import React from 'react'
import Column from './components/Grid/Column'
import Container from './components/Grid/Container'
import Row from './components/Grid/Row'

class App extends React.Component {
  render () {
    return (
        <Container>
          <Row>
            <Column colNum={6}>
              <div>Content 1</div>
            </Column>
            <Column colNum={6}>
              <div>Content 2</div>
            </Column>
          </Row>
          <Row>
            <Column colNum={6}>
              <div>Content 3</div>
            </Column>
            <Column colNum={6}>
              <div>Content 4</div>
            </Column>
          </Row>
        </Container>
    )
  }
}

export default App

import React, { Component } from 'react'
import PhonesJsonLoader from '../../components/PhonesJsonLoader'
import UserJsonLoader from '../../components/UserJsonLoader'

class LoaderPage extends Component {
  render () {
    return (
      <>
        <UserJsonLoader />
        <PhonesJsonLoader />
      </>
    )
  }
}

export default LoaderPage

import React, { Component } from 'react'

class DataProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      isFetching: true,
      isError: false
    }
  }

  componentDidMount () {
    this.load()
  }

  load = () => {
    const {loadData} = this.props
    loadData()
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(() => {
        this.setState({
          isError: true
        })
      })
      .finally(() => {
        this.setState({
          isFetching: false
        })
      })
  }
  render () {
    const {render} = this.props;
    return render(this.state)
  }
}

export default DataProvider

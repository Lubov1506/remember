import React, { Component } from 'react'

class FormToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }
  inputHandler = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  submitHandler = (event) => {
    event.preventDefault()
    const { props, state } = this
    props.addToDo(state.todo)
    this.setState({
        todo: ''
    })
  }
  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          name='todo'
          onChange={this.inputHandler}
          value={this.state.todo}
        />
        <button type='submit'>Add ToDo</button>
      </form>
    )
  }
}

export default FormToDo

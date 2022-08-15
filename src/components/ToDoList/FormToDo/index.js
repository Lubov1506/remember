import React, { Component } from 'react'
import styles from './FormToDo.module.css'
import CN from 'classnames'

class FormToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: '',
      isValid: true
    }
  }
  inputHandler = event => {
    const { name, value } = event.target
    if(value.includes(' ')){
      this.setState({
        isValid: false
      })
    }
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
    const inputClassName = CN(styles.inputNorma, {
      [styles.inputInvalid]: !this.state.isValid
    })
    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input
          type='text'
          name='todo'
          onChange={this.inputHandler}
          value={this.state.todo}
          className={inputClassName}
        />
        <button type='submit'>Add ToDo</button>
      </form>
    )
  }
}

export default FormToDo

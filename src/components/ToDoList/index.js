import React, { Component } from 'react'
import FormToDo from './FormToDo'
import List from './List'
import styles from './ToDoList.module.css'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toDos: []
    }
  }
newToDo=(inputValue)=>{
  console.log(inputValue);
  const {toDos} = this.state
  const copyToDos=[...toDos]
  copyToDos.push(inputValue)
  this.setState({
    toDos: copyToDos
  })
}

  render () {
    return <>
    <FormToDo addToDo={this.newToDo}/>
    <List toDos={this.state.toDos}/>
    </>
  }
}

export default ToDoList

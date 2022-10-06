import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import styles from './TDList.module.css'

const TDList = () => {
  const [todoList, setTodoList] = useState([])

  const addTodo = inputValue => {
    if ([...inputValue.inputValue].length > 0) {
      let copy = [...todoList]
      copy.push(inputValue)
      setTodoList(copy)
    }
  }

  const check = id => {
    let checked = todoList.map(todo => {
      return todo.id === Number(id) ? { ...todo, isDone: !todo.isDone } : { ...todo }
    })
    setTodoList(checked)
  }
  const filter = () =>{
    let filtered = todoList.filter(todo => !todo.isDone)
    setTodoList(filtered)
  }
  return (
    <div className={styles.container}>
        <h1>ToDo List</h1>
      <Form addTodo={addTodo} />
      <List todoList={todoList} check={check} />
      {todoList.length>0 && <button onClick={filter}>Filter for checked</button>}
      
    </div>
  )
}

export default TDList

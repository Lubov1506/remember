import React, { useState } from 'react'
import styles from './List.module.css'

const List = props => {
  const { todos, setTodos } = props

  const clickHandler = e => {
    e.preventDefault()
    props.handleToggle(e.target.id)
  }

  const deleteTodo = e => {
    e.preventDefault()
    console.log(e.target.id);
    props.filter(e.target.id)
  }

  const todoArray = todos.map(todo => {
    return (
      <div key={todo.id} >
        <li
          id={todo.id}
          key={todo.id + todo.todo}
          className={todo.complete ? styles.strike : ''}
        >
          {todo.textInput}


        </li>     
          <button id={todo.id} onClick={deleteTodo}>X</button>
          <button id={todo.id} onClick={clickHandler}>Check</button>
      </div>
    )
  })
  return <ul>{todoArray}</ul>
}

export default List

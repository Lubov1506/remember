import React from 'react'
import styles from './List.module.css'

const List = ({ todoList , check}) => {

    const checkHandler =(e)=>{
        e.preventDefault()
        check(e.target.id)
    }
  const liArray = todoList.map(todo => {
    return (
      <div key={todo.id} onClick={checkHandler}>
        <li key={todo.id} id={todo.id} className={todo.isDone ? [styles.strike] : ''}>
          {todo.inputValue}
        </li>
      </div>
    )
  })
  return <ul>{liArray}</ul>
}

export default List

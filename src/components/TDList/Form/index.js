import React, { useState } from 'react'

const Form = ({ addTodo }) => {
  const initialState = {
    id: '',
    inputValue: '',
    isDone: false
  }
  const [todo, setTodo] = useState(initialState)

  const inputHandler = e => {
    setTodo({
      id: Date.now(),
      inputValue: e.target.value,
      isDone: false
    })
  }
  const submit = e => {
    e.preventDefault()
    addTodo(todo)
    setTodo(initialState)
  }
  return (
    <form onSubmit={submit}>
      <input
        type='text'
        name='todo'
        value={todo.inputValue}
        onChange={inputHandler}
        placeholder='Type your todo here...'
      />
      <button type='submit'>Add todo</button>
    </form>
  )
}

export default Form

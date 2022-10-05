import React, { useState } from 'react'

const Form = props => {
  const {todos,setTodos} = props
  const initialState={
        id: '',
    textInput: '',
    complete: false
  }
  const [todo, setTodo] = useState(initialState)

  const inputHandler = event => {
    setTodo({
      id: Date.now(),
      textInput: event.target.value,
      complete: false
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    props.addTodo(todo)
    setTodo(initialState)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        name='todo'
        value={todo.textInput}
        onChange={inputHandler}
      />
      <button type='submit'>Add todo</button>
    </form>
  )
}

export default Form

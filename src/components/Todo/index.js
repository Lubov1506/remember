import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const Todo = () => {
  const [todos, setTodos] = useState([])

  const addTodo = inputValue => {
    if([...inputValue.textInput].length>0){
    const copyTodos = [...todos]
    copyTodos.push(inputValue)
    setTodos(copyTodos)      
    }

  }

  const handleToggle = (id) => {
    let mapped = todos.map(todo => {
      return todo.id === Number(id) ? { ...todo, complete: !todo.complete } : { ...todo};
    });
    console.log(mapped);
    setTodos(mapped);
  }
  
  const filter=(id)=>{
    let filtered = todos.filter(todo => todo.id !== Number(id))
    setTodos(filtered)
  } 
  return (
    <div>
      <Form addTodo={addTodo} />
      <List todos={todos} handleToggle={handleToggle} filter={filter}/>

    </div>
  )
}

export default Todo

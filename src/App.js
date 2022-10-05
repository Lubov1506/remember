import './App.css'
import React, { useState, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ThemeContext, AppContext } from './contexts'
import { CONSTANTS, ACTIONS } from './constants'
import { reducer } from './reducer'
import NavBar from './components/NavBar'
import PhoneBook from './components/PhoneBook'
import ToDoList from './components/ToDoList'
import Todo from './components/Todo'

const { THEMES } = CONSTANTS

const App = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT)

  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false
  })

  const openMenu = () => {
    dispatch({
      type: ACTIONS.MENU_OPEN
    })
  }

  const closeMenu = () => {
    dispatch({
      type: ACTIONS.MENU_CLOSE
    })
  }

  return (
    <AppContext.Provider value={{ state, openMenu, closeMenu }}>
      <BrowserRouter>
        <NavBar />

        <button onClick={openMenu}>Open menu</button>
        <nav>
          <ul>
            <li>
              <Link to='/phonebook'>Phonebook</Link>
            </li>
            <li>
              <Link to='/todolist'>ToDoList</Link>
            </li>
            <li>
              <Link to='/todo'>ToDo</Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route path='/phonebook' element={<PhoneBook />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/todo' element={<Todo />} />
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App

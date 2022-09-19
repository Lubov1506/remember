import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ToDoList from './components/ToDoList' 
import Form from './components/Form'
import LayOut from './components/LayOut'
function App (props) {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>         
           <li>
            <Link to='/todolist'>ToDoList</Link>
          </li>
          <li>
            <Link to='/layout'>LayOut</Link>
          </li>
          <li>
            <Link to='/form'>Form</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/form' element={<Form />} />
          <Route path='/layout' element={<LayOut />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

const Home = () => {
  return <div>Home</div>
}
const About = () => {
  return <div>About</div>
}
const Contacts = () => {
  return <div>Contacts</div>
}
const PageNotFound = () => {
  return <div>!!! PAGE NOT FOUND !!!</div>
}

import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  return (
    <>
      <TodoList />
      <AddTodoForm />
    </>
  )
}

export default App

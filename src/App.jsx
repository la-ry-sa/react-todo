import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const todoList = [
    { id: 1, title: "Cook breakfast" },
    { id: 2, title: "Do homework" },
    { id: 3, title: "Pet the cat" }
  ];

  return (
    <>
      <h1>Todo List</h1>
        <ul> 
          {todoList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
      ))}</ul>
      
    </>
  )
}

export default App

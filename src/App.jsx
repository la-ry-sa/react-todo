import { useState } from 'react'
import './App.css'

function App() {

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

import React from "react"

const todoList = [
    { id: 1, title: "Cook breakfast" },
    { id: 2, title: "Do homework" },
    { id: 3, title: "Pet the cat" }
  ];


function TodoList() {
    return (
        <div>
            <ul> 
                {todoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )   
}


export default TodoList
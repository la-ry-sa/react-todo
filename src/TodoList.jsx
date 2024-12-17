import React from "react"
import TodoListItem from './TodoListItem';


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
                    <TodoListItem key={todo.id} todo={todo} /> 
                ))}
            </ul>
        </div>
    )   
}


export default TodoList
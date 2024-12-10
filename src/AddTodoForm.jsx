import React from 'react';

function AddTodoForm(props) {
    console.log('Props received in AddTodoForm:', props);
    function handleAddTodo(event) {
        event.preventDefault();

        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);

        props.onAddTodo(todoTitle);

        event.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title </label>
            <input type='text' id='todoTitle' name='title'/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm;
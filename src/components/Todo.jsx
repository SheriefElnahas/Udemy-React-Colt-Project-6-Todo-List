import './Todo.css';

import React from 'react';


function Todo(props) {
    const [todo, setTodo ] = React.useState(props);
    function handleDelete() {
        props.removeTodo(props.id)
    }
    function handleEdit() {
        setTodo(oldState => ({
            ...oldState,
            editing: !oldState.editing
        }))
    }
    function handleChange(e) {
        setTodo(oldState => ({
            ...oldState,
            todoTitle : e.target.value
        }))
    }
    function handleSave() {
        // update the state by change edit back to false
        setTodo(oldState => ({
            ...oldState,
            editing: false,

        }))
    }
    return (
        // If edit is clicked then hide the title and show the input
        <div className="Todo">
            {
            todo.editing ? 
                <div className="edit">
                    <input type="text" value={todo.todoTitle} onChange={handleChange} name={todo.todoTitle}/>
                    <button onClick={handleSave}>Save</button>
                 </div> 
               : <p>{todo.todoTitle}</p>}
            
            {/* if edit is clicked then hide the icons */}
            {!todo.editing &&  <div className="Todo-icons">
                <span><i className="fa-solid fa-pen" onClick={handleEdit}></i></span>
                <span><i className="fa-solid fa-trash" onClick={handleDelete}></i></span>
            </div>}
          
        </div>
    )
}

export default Todo;
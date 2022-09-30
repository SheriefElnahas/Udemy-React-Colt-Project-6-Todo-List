import './NewTodoForm.css';

import React from 'react';

function NewTodoForm(props) {
    const [todoTitle, setTodo ] = React.useState('');

    function handleClick() {
        props.addTodo({todoTitle});
    }

    function handleChange(e) {
        setTodo(e.target.value)
        
    }
    function handleSubmit(e) {
        e.preventDefault();
        setTodo('');
    }
    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <h3>New Todo</h3>
            <input className='NewTodoForm-input' type="text" 
            placeholder='New Todo' name={todoTitle} value={todoTitle} onChange={handleChange} />
            <button className='NewTodoForm-btn' onClick={handleClick}>Add Todo</button>
        </form>
    )
}


export default NewTodoForm;
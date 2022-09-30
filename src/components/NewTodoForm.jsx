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
    return (
        <div className="NewTodoForm">
            <h3>New Todo</h3>
            <input className='NewTodoForm-input' type="text" 
            placeholder='New Todo' name={todoTitle} value={todoTitle} onChange={handleChange} />
            <button className='NewTodoForm-btn' onClick={handleClick}>Add Todo</button>
        </div>
    )
}


export default NewTodoForm;
import './NewTodoForm.css';

function NewTodoForm() {
    return (
        <div className="NewTodoForm">
            <h3>New Todo</h3>
            <input className='NewTodoForm-input' type="text" placeholder='New Todo' />
            <button className='NewTodoForm-btn'>Add Todo</button>
        </div>
    )
}


export default NewTodoForm;
import './Todo.css';

function Todo(props) {
    function handleClick() {
        props.removeTodo(props.id)
    }
    return (
        <div className="Todo">
            <p>{props.todoTitle}</p>
            <div className="Todo-icons">
                <span><i className="fa-solid fa-pen"></i></span>
                <span><i className="fa-solid fa-trash" onClick={handleClick}></i></span>
            </div>
        </div>
    )
}

export default Todo;
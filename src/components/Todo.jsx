import './Todo.css';

function Todo() {
    return (
        <div className="Todo">
            <p>Item 1</p>
            <div className="Todo-icons">
                <span><i className="fa-solid fa-pen"></i></span>
                <span><i className="fa-solid fa-trash"></i></span>
            </div>
        </div>
    )
}

export default Todo;
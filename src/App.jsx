import './App.css';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: [
      {
        id: uuidv4(),
        todoTitle: 'Item 1',
      },
      {
        id: uuidv4(),
        todoTitle: 'Item 2',
      },
    ]}
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = {...todo, id: uuidv4()};
    this.setState(oldState => ({
      todos: [...oldState.todos, newTodo]
    }))
  }

  

  render() {
    const todosElement = this.state.todos.map((todo) => {
      return <Todo todoTitle={todo.todoTitle} key={todo.id} id={todo.id} />
    })
    return (
      <div className="App">
        <Header />
          {todosElement}
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    )
  }

}

export default App

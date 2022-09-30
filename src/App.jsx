import './App.css';

import React from 'react';

import Header from "./components/Header";
import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: [
      {
        todoTitle: 'Item 1',
        todoId : 0
      }
    ]}
  }
  render() {
    return (
      <div className="App">
        <Header />
        < Todo />
        < Todo />
        <NewTodoForm />
      </div>
    )
  }

}

export default App

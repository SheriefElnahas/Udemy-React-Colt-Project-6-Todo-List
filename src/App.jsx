import './App.css';

import Header from "./components/Header";
import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';

function App() {
  return (
    <div className="App">
      <Header />
      < Todo />
      < Todo />
      <NewTodoForm />
    </div>
  )
}

export default App

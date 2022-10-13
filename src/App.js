import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState(['first', 'second']);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

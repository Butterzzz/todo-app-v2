import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './components/Store/TodoSlice';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTodoHandler = () => dispatch(addTodo({ text }));

  return (
    <div className="App">

      <h1>Todo App</h1>

      <TodoForm
        addTodo={addTodoHandler}
        text={text}
        setText={setText} />

      <TodosActions />

      <TodoList />

    </div>
  );
}

export default App;
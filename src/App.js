import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './components/Store/TodoSlice';
import { selectTheme } from './components/Store/ThemeSlice';
import ThemeToggle from './components/UI/ThemeToggle';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const addTodoHandler = () => dispatch(addTodo({ text }));

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <h1>Todo App</h1>

        <ThemeToggle theme={theme} />

        <TodoForm
          addTodo={addTodoHandler}
          text={text}
          setText={setText} />

        <TodosActions />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
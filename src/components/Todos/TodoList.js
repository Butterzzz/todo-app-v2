import { useSelector } from 'react-redux';
import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    const completedTodos = useSelector((state) => state.todos.todos.filter((todo) => todo.isCompleted));
    const completedCount = completedTodos.length;

    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Список задач пуст</h2>}
            {todos.map((todo) =>
                <Todo
                    key={todo.id}
                    {...todo}
                />
            )}
            {completedCount > 0 && <h2>{`У вас ${completedCount} ${completedCount > 1 ? "завершенных задачи" : "завершенная задача"}`}</h2>}
        </div>
    )
}

export default TodoList;
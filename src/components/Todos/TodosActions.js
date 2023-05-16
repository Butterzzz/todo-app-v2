import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteAllTodo, deleteCompletedTodos } from '../Store/TodoSlice';
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosActions.module.css';

function TodosActions({ isComplited }) {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    return (
        <div className={styles.todosActionsContainer}>
            <Button
                title="Очистить все задачи"
                onClick={() => dispatch(deleteAllTodo())}
                disabled={todos.length === 0}
            >
                <RiRefreshLine />
            </Button>

            <Button
                title="Удалить выполненные задачи"
                onClick={() => dispatch(deleteCompletedTodos({ isComplited }))}
                disabled={todos.filter((todo) => todo.isCompleted).length === 0}
            >
                < RiDeleteBin2Line />
            </Button>

        </div>
    )
}

export default TodosActions;
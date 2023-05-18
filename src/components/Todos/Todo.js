import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../Store/TodoSlice';
import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo({ id, text, isCompleted }) {
    const dispatch = useDispatch();

    return (
        <div className={`${styles.todo} ${isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{text}</div>

            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => dispatch(deleteTodo({ id }))} />

            <FaCheck
                className={styles.checkIcon}
                onClick={() => dispatch(toggleTodo({ id }))} />
        </div>
    )
}

export default Todo;
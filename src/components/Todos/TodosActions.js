import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosActions.module.css';

function TodosActions({ resetTodos, deleteComplitedTodos, complitedTodosExist }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Очистить задачи" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Удалить выполненные задачи" onClick={deleteComplitedTodos} disabled={!complitedTodosExist}>< RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions;
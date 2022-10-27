import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions({ resetTodos, deleteComplitedTodos }) {
    return (
        <>
            <Button title="Очистить задачи" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Удалить выполненные задачи" onClick={deleteComplitedTodos}>< RiDeleteBin2Line /></Button>
        </>
    )
}

export default TodosActions;
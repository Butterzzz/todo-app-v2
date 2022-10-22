import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions() {
    return (
        <>
            <Button title="Очистить задачи"><RiRefreshLine /></Button>
            <Button title="Удалить выполненные задачи">< RiDeleteBin2Line /></Button>
        </>
    )
}

export default TodosActions;
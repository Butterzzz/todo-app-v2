import styles from './TodoForm.module.css';
import Button from "../UI/Button";

function TodoForm({ addTodo, text, setText }) {

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>

                <input
                    placeholder="Новая задача"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <Button
                    type="submit"
                    title="Добавить"
                    disabled={text.trim() === ''}
                >
                    Добавить
                </Button>

            </form>
        </div>
    )
}

export default TodoForm;
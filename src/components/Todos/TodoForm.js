import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                placeholder="Новая задача"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Создать</button>
        </form>

    )
}

export default TodoForm;
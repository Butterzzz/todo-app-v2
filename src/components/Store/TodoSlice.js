import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: uuidv4(),
                text: action.payload.text,
                isCompleted: false,
            })
        },

        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },

        toggleTodo(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.isCompleted = !toggledTodo.isCompleted;
        },

        deleteAllTodo(state) {
            state.todos = [];
        },

        deleteCompletedTodos(state) {
            state.todos = state.todos.filter(todo => !todo.isCompleted);
        },
    }
});

export const { addTodo, deleteTodo, toggleTodo, deleteAllTodo, deleteCompletedTodos } = todoSlice.actions;
export default todoSlice.reducer;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from './TodoSlice';
import themeReducer from './ThemeSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
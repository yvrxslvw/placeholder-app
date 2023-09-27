import { combineReducers } from '@reduxjs/toolkit';
import { Todos, todosApi } from 'widgets';

export const rootReducer = combineReducers({
	[todosApi.reducerPath]: todosApi.reducer,
	todosList: Todos.reducer,
});

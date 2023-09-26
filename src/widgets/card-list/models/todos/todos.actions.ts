import { PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from './todos.slice';
import { ITodo } from 'shared';

export const toggleCompletedById = (state: TodosState, action: PayloadAction<number>) => {
	state.todos[action.payload].completed = !state.todos[action.payload].completed;
};

export const getTodosPending = (state: TodosState) => {
	state.error = '';
	state.isLoading = true;
	state.todos = [];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTodosRejected = (state: TodosState, action: PayloadAction<any>) => {
	state.error = action.payload;
	state.isLoading = false;
	state.todos = [];
};

export const getTodosFulfilled = (state: TodosState, action: PayloadAction<ITodo[]>) => {
	state.error = '';
	state.isLoading = false;
	state.todos = action.payload;
};

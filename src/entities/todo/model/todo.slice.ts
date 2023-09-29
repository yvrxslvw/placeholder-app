import { createSlice } from '@reduxjs/toolkit';
import { ITodo, todoApi } from 'shared';
import { nextPage, todoApiFulfilled, toggleCompleted } from './todo.actions';

export interface TodoState {
	entries: Record<number, ITodo>;
	currentPage: number;
	totalCount: number;
}

const initialState: TodoState = {
	entries: {},
	currentPage: 1,
	totalCount: 0,
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleCompleted,
		nextPage,
	},
	extraReducers: builder => {
		builder.addMatcher(todoApi.endpoints.getTodos.matchFulfilled, todoApiFulfilled);
	},
});

export const Todo = { reducer: todoSlice.reducer, actions: todoSlice.actions };

import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from 'shared';
import { nextPage, todosApiFulfilled, toggleCompletedById } from './todos.actions';
import { todosApi } from 'widgets';

export interface TodosState {
	todos: ITodo[];
	totalCount: number;
	page: number;
}

const initialState: TodosState = {
	todos: [],
	totalCount: 0,
	page: 1,
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleCompletedById,
		nextPage,
	},
	extraReducers: builder => {
		builder.addMatcher(todosApi.endpoints.getTodos.matchFulfilled, todosApiFulfilled);
	},
});

export const Todos = { reducer: todosSlice.reducer, actions: todosSlice.actions };

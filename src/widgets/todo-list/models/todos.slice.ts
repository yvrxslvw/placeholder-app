import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from 'shared';
import { todosApiFulfilled, toggleCompletedById } from './todos.actions';
import { todosApi } from 'widgets';

export interface TodosState {
	todos: ITodo[];
	totalCount: number;
}

const initialState: TodosState = {
	todos: [],
	totalCount: 0,
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleCompletedById,
	},
	extraReducers: builder => {
		builder.addMatcher(todosApi.endpoints.getTodos.matchFulfilled, todosApiFulfilled);
	},
});

export const Todos = { reducer: todosSlice.reducer, actions: todosSlice.actions };

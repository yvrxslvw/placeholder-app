import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from 'shared';
import { getTodosFulfilled, getTodosPending, getTodosRejected, toggleCompletedById } from './todos.actions';
import { getTodos } from 'widgets/card-list/api';

export interface TodosState {
	isLoading: boolean;
	error: string;
	todos: ITodo[];
}

const initialState: TodosState = {
	isLoading: false,
	error: '',
	todos: [],
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleCompletedById,
	},
	extraReducers: builder => {
		builder.addCase(getTodos.pending, getTodosPending);
		builder.addCase(getTodos.rejected, getTodosRejected);
		builder.addCase(getTodos.fulfilled, getTodosFulfilled);
	},
});

export const Todos = { reducer: todosSlice.reducer, actions: todosSlice.actions, getTodos };

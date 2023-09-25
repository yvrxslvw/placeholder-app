import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from 'shared';
import { getTodos } from '.';

interface Todos {
	isLoading: boolean;
	error: string;
	todos: ITodo[];
}

const initialState: Todos = {
	isLoading: false,
	error: '',
	todos: [],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		toggleCompletedById: (state, action: PayloadAction<number>) => {
			state.todos[action.payload].completed = !state.todos[action.payload].completed;
		},
	},
	extraReducers: builder => {
		builder.addCase(getTodos.pending, state => {
			state.error = '';
			state.isLoading = true;
			state.todos = [];
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		builder.addCase(getTodos.rejected, (state, action: PayloadAction<any>) => {
			state.error = action.payload;
			state.isLoading = false;
			state.todos = [];
		});
		builder.addCase(getTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
			state.error = '';
			state.isLoading = false;
			state.todos = action.payload;
		});
	},
});

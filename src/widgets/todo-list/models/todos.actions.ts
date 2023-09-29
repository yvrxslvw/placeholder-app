import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from './todos.slice';
import { ITodo } from 'shared';

export const toggleCompletedById = (state: CombinedState<TodosState>, action: PayloadAction<number>) => {
	state.todos[action.payload].completed = !state.todos[action.payload].completed;
};

export const todosApiFulfilled = (
	state: CombinedState<TodosState>,
	action: PayloadAction<{ todos: ITodo[]; totalCount: number }>,
) => {
	state.todos.push(...action.payload.todos);
	state.totalCount = action.payload.totalCount;
	state.todos.sort((first, second) => first.id - second.id);
};

import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from '.';
import { ITodo } from 'shared';

export const toggleCompleted = (state: CombinedState<TodoState>, action: PayloadAction<number>) => {
	state.entries[action.payload].completed = !state.entries[action.payload].completed;
};

export const nextTodoPage = (state: CombinedState<TodoState>) => {
	state.currentPage++;
};

export const todoApiFulfilled = (
	state: CombinedState<TodoState>,
	action: PayloadAction<{ todos: ITodo[]; totalCount: number }>,
) => {
	const entries = action.payload.todos.reduce((record, todo: ITodo) => {
		record[todo.id] = todo;
		return record;
	}, {} as Record<number, ITodo>);

	state.totalCount = action.payload.totalCount;
	state.entries = { ...state.entries, ...entries };
};

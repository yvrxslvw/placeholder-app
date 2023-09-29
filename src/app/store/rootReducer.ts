import { combineReducers } from '@reduxjs/toolkit';
import { Todo } from 'entities';
import { todoApi } from 'shared';

export const rootReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	todo: Todo.reducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { Todo, User } from 'entities';
import { todoApi, userApi } from 'shared';

export const rootReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	todo: Todo.reducer,
	[userApi.reducerPath]: userApi.reducer,
	user: User.reducer,
});

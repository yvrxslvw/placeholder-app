import { combineReducers } from '@reduxjs/toolkit';
import { Todo, User, Post } from 'entities';
import { todoApi, userApi, postApi } from 'shared';

export const rootReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	todo: Todo.reducer,
	[userApi.reducerPath]: userApi.reducer,
	user: User.reducer,
	[postApi.reducerPath]: postApi.reducer,
	post: Post.reducer,
});

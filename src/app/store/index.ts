import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { postApi, todoApi, userApi } from 'shared';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todoApi.middleware).concat(userApi.middleware).concat(postApi.middleware),
});

export type rootState = ReturnType<typeof store.getState>;

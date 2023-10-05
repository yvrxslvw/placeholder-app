import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { todoApi, userApi } from 'shared';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware).concat(userApi.middleware),
});

export type rootState = ReturnType<typeof store.getState>;

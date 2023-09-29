import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { todoApi } from 'shared';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),
});

export type rootState = ReturnType<typeof store.getState>;
export * from './rootAction';

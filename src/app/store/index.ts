import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
// import { todosApi } from 'widgets';

export const store = configureStore({
	reducer: rootReducer,
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware),
});

export * from './rootAction';
export * from './types';

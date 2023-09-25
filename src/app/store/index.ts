import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../shared/store/rootReducer';
// import { todosApi } from 'widgets';

export const store = configureStore({
	reducer: rootReducer,
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware),
});

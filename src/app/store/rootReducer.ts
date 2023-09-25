import { combineReducers } from '@reduxjs/toolkit';
import { todosSlice } from 'widgets';

export const rootReducer = combineReducers({
	// [todosApi.reducerPath]: todosApi.reducer,
	todosList: todosSlice.reducer,
});

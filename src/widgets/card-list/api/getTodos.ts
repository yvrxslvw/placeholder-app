import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo, jsonPlaceHolderApi } from 'shared';

export const getTodos = createAsyncThunk<ITodo[]>('todos/getAll', async (_, thunkApi) => {
	try {
		const response = await jsonPlaceHolderApi.get<ITodo[]>('/todos');
		return response.data;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		return thunkApi.rejectWithValue(error.message);
	}
});

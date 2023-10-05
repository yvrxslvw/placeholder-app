import { createSlice } from '@reduxjs/toolkit';
import { IUser, userApi } from 'shared';
import { userApiFulfilled } from '.';

export interface UserState {
	entries: Record<number, IUser>;
}

const initialState: UserState = {
	entries: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addMatcher(userApi.endpoints.getUsers.matchFulfilled, userApiFulfilled);
	},
});

export const User = { reducer: userSlice.reducer, actions: userSlice.actions };

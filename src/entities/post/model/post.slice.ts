import { createSlice } from '@reduxjs/toolkit';
import { IPost, postApi } from 'shared';
import { postApiFulfilled, nextPostPage } from './post.actions';

export interface PostState {
	entries: Record<number, IPost>;
	totalCount: number;
	currentPage: number;
}

const initialState: PostState = {
	entries: {},
	totalCount: 0,
	currentPage: 1,
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		nextPostPage,
	},
	extraReducers: builder => {
		builder.addMatcher(postApi.endpoints.getPosts.matchFulfilled, postApiFulfilled);
	},
});

export const Post = { reducer: postSlice.reducer, actions: postSlice.actions };

import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { PostState } from '.';
import { IPost } from 'shared';

export const nextPostPage = (state: CombinedState<PostState>) => {
	state.currentPage++;
};

export const postApiFulfilled = (
	state: CombinedState<PostState>,
	action: PayloadAction<{ posts: IPost[]; totalCount: number }>,
) => {
	const entries = action.payload.posts.reduce((record, post: IPost) => {
		record[post.id] = post;
		return record;
	}, {} as Record<number, IPost>);

	state.totalCount = action.payload.totalCount;
	state.entries = { ...state.entries, ...entries };
};

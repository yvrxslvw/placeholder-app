import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, jsonPlaceHolder_URL } from 'shared';

type PostResponse = { posts: IPost[]; totalCount: number };
type PostRequest = { _limit: number; _page: number };

export const postApi = createApi({
	reducerPath: 'api/posts',
	tagTypes: ['PostList'],
	baseQuery: fetchBaseQuery({ baseUrl: jsonPlaceHolder_URL }),
	endpoints: builder => ({
		getPosts: builder.query<PostResponse, PostRequest>({
			query: params => ({
				url: '/posts',
				method: 'GET',
				params,
			}),
			transformResponse: (posts: IPost[], meta) => {
				return { posts, totalCount: Number(meta?.response?.headers.get('x-total-count')) };
			},
		}),
	}),
});

export const { useGetPostsQuery } = postApi;

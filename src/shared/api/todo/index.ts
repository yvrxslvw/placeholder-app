import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jsonPlaceHolder_URL, ITodo } from 'shared';

export const todoApi = createApi({
	reducerPath: 'api/todos',
	tagTypes: ['TodoList'],
	baseQuery: fetchBaseQuery({
		baseUrl: jsonPlaceHolder_URL,
	}),
	endpoints: builder => ({
		getTodos: builder.query<{ todos: ITodo[]; totalCount: number }, { _limit: number; _page: number }>({
			query: params => ({
				url: `/todos`,
				method: 'GET',
				params: { ...params },
			}),
			transformResponse: (todos: ITodo[], meta) => {
				return { todos, totalCount: Number(meta?.response?.headers.get('x-total-count')) };
			},
		}),
	}),
});

export const { useGetTodosQuery } = todoApi;

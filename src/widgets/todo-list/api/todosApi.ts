import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jsonPlaceHolder_URL, ITodo } from 'shared';

export const todosApi = createApi({
	reducerPath: 'api/todos',
	tagTypes: ['TodoList'],
	baseQuery: fetchBaseQuery({
		baseUrl: jsonPlaceHolder_URL,
	}),
	endpoints: builder => ({
		getTodos: builder.query<ITodo[], null>({
			query: () => ({
				url: `/todos`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetTodosQuery } = todosApi;

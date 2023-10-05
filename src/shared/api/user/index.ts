import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, jsonPlaceHolder_URL } from 'shared';

export const userApi = createApi({
	reducerPath: 'api/users',
	tagTypes: ['UserList'],
	baseQuery: fetchBaseQuery({
		baseUrl: jsonPlaceHolder_URL,
	}),
	endpoints: builder => ({
		getUsers: builder.query<IUser[], null>({
			query: () => ({
				url: '/users',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetUsersQuery } = userApi;

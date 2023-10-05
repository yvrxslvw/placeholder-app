import { UserCard } from 'entities';
import { FC } from 'react';
import { Loader, Text, getUserList, useAppSelector, useGetUsersQuery } from 'shared';

export const UserList: FC = () => {
	const { isError, isLoading } = useGetUsersQuery(null);
	const { entries } = useAppSelector(state => state.user);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Text>An unexpected error occurred... :(</Text>
			) : (
				getUserList(entries).map(user => <UserCard user={user} key={user.id} />)
			)}
		</>
	);
};

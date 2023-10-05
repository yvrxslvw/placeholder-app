import { FC } from 'react';
import { Container } from 'shared';
import { UserList } from 'widgets';

export const UsersPage: FC = () => {
	return (
		<Container>
			<UserList />
		</Container>
	);
};

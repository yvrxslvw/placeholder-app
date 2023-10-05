import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading } from 'shared';
import { UserList } from 'widgets';

export const UsersPage: FC = () => {
	return (
		<Container>
			<Heading level={2} className={s.title}>
				User list:
			</Heading>
			<UserList />
		</Container>
	);
};

import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading } from 'shared';
import { UserInfo } from 'widgets';

export const UserInfoPage: FC = () => {
	return (
		<Container>
			<Heading level={2} className={s.title}>
				User info:
			</Heading>
			<UserInfo />
		</Container>
	);
};

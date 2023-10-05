import { FC, ReactNode } from 'react';
import s from './style.module.scss';
import { Card, Heading, IUser } from 'shared';

interface UserCardProps {
	user: IUser;
	link: ReactNode;
}

export const UserCard: FC<UserCardProps> = ({ user, link }) => {
	return (
		<Card>
			<Heading level={2} className={s.title}>
				User #{user.id}: {user.username}
			</Heading>
			{link}
		</Card>
	);
};

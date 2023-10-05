import { FC } from 'react';
import s from './style.module.scss';
import { Card, Heading, IUser, ROUTER_PATHS } from 'shared';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
	user: IUser;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate(ROUTER_PATHS.users + '/' + user.id);
	};

	return (
		<Card className={s.userCard} onClick={onClickHandler}>
			<Heading level={2}>
				User #{user.id}: {user.username}
			</Heading>
		</Card>
	);
};

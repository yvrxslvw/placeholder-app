import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from 'shared';

interface UserLinkProps {
	userId: number;
}

export const UserLink: FC<UserLinkProps> = ({ userId }) => {
	return <Link to={ROUTER_PATHS.users + '/' + userId}>More info...</Link>;
};

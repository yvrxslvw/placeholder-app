import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS, useAppSelector } from 'shared';

interface PostAuthorLinkProps {
	authorId: number;
}

export const PostAuthorLink: FC<PostAuthorLinkProps> = ({ authorId }) => {
	const { entries } = useAppSelector(state => state.user);
	const userName = entries[authorId].username;

	return (
		<span>
			Author: <Link to={ROUTER_PATHS.users + '/' + authorId}>{userName}</Link>
		</span>
	);
};

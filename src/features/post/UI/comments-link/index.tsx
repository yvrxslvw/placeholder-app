import { FC } from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from 'shared';

interface PostCommentsLinkProps {
	postId: number;
}

export const PostCommentsLink: FC<PostCommentsLinkProps> = ({ postId }) => {
	return (
		<Link to={ROUTER_PATHS.posts + '/' + postId} className={s.comments}>
			View comments
		</Link>
	);
};

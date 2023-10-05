import { FC } from 'react';
import s from './style.module.scss';
import { ROUTER_PATHS, Text, useAppSelector } from 'shared';
import { Link } from 'react-router-dom';

interface TodoAuthorProps {
	authorId: number;
}

export const TodoAuthor: FC<TodoAuthorProps> = ({ authorId }) => {
	const { entries } = useAppSelector(state => state.user);
	const author = entries[authorId];

	return (
		<Text className={s.author}>
			Author: <Link to={ROUTER_PATHS.users + '/' + authorId}>{author.username}</Link>
		</Text>
	);
};

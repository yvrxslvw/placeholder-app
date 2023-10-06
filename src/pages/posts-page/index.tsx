import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading } from 'shared';
import { PostList } from 'widgets';

export const PostsPage: FC = () => {
	return (
		<Container>
			<Heading level={2} className={s.title}>
				Post list:
			</Heading>
			<PostList />
		</Container>
	);
};

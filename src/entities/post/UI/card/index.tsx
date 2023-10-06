import { FC, ReactNode } from 'react';
import s from './style.module.scss';
import { Card, Heading, IPost, Text } from 'shared';

interface PostCardProps {
	post: IPost;
	comments: ReactNode;
	author: ReactNode;
}

export const PostCard: FC<PostCardProps> = ({ post, comments, author }) => {
	return (
		<Card className={s.postCard}>
			<Heading level={4} className={s.title}>
				{post.title}
			</Heading>
			<Text className={s.body}>{post.body}</Text>
			<section className={s.links}>
				{comments}
				{author}
			</section>
		</Card>
	);
};

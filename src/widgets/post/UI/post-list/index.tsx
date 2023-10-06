import { PostCard } from 'entities';
import { PostAuthorLink, PostCommentsLink } from 'features';
import { FC } from 'react';
import { Loader, Text, getPostList } from 'shared';
import { usePosts } from '../../lib';

export const PostList: FC = () => {
	const { isLoading, isError, entries, isPaginationLoading } = usePosts();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Text>An unexpected error occurred... :(</Text>
			) : (
				getPostList(entries).map(post => (
					<PostCard
						key={post.id}
						post={post}
						author={<PostAuthorLink authorId={post.userId} />}
						comments={<PostCommentsLink postId={post.id} />}
					/>
				))
			)}

			{isPaginationLoading && <Loader />}
		</>
	);
};

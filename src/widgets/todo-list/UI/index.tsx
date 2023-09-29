import { FC } from 'react';
import { Loader, Text } from 'shared';
import { TodoCard } from 'entities';
import { TodoCompleteButton } from 'features';
import { usePagination } from '../lib';

export const TodoList: FC = () => {
	const { isError, isLoading, isPaginationLoading, todos } = usePagination();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Text>An unexpected error occurred... :(</Text>
			) : (
				todos &&
				todos.length > 0 &&
				todos.map(todo => (
					<TodoCard
						todo={todo}
						key={todo.id}
						toggleButton={<TodoCompleteButton todoId={todo.id - 1} completed={todo.completed} />}
					/>
				))
			)}

			{isPaginationLoading && <Loader />}
		</>
	);
};

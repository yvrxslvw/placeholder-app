import { FC, memo } from 'react';
import { Loader, Text } from 'shared';
import { TodoCard } from 'entities';
import { TodoCompleteButton } from 'features';
import { useTodos } from '../lib';

export const CardList: FC = memo(() => {
	const { error, isLoading, todos } = useTodos();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Text>An unexpected error occurred... {error} :(</Text>
			) : (
				todos &&
				todos.length > 0 &&
				todos.map(todo => (
					<TodoCard todo={todo} key={todo.id} toggleButton={<TodoCompleteButton todoId={todo.id - 1} />} />
				))
			)}
		</>
	);
});

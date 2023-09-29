import { FC } from 'react';
import { Loader, Text, getTodoList } from 'shared';
import { TodoCard } from 'entities';
import { TodoCompleteButton } from 'features';
import { usePagination } from 'widgets/todo/lib';

export const TodoList: FC = () => {
	const { isError, isLoading, isPaginationLoading, entries } = usePagination();

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Text>An unexpected error occurred... :(</Text>
			) : (
				getTodoList(entries).map(todo => (
					<TodoCard
						key={todo.id}
						todo={todo}
						toggleButton={<TodoCompleteButton todoId={todo.id} completed={todo.completed} />}
					/>
				))
			)}

			{isPaginationLoading && <Loader />}
		</>
	);
};

import { FC } from 'react';
import { Loader, Text, getTodoList } from 'shared';
import { TodoCard } from 'entities';
import { TodoAuthor, TodoCompleteButton } from 'features';
import { useTodosList } from 'widgets/todo/lib';

export const TodoList: FC = () => {
	const { isError, isLoading, isPaginationLoading, entries } = useTodosList();

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
						author={<TodoAuthor authorId={todo.userId} />}
					/>
				))
			)}

			{isPaginationLoading && <Loader />}
		</>
	);
};

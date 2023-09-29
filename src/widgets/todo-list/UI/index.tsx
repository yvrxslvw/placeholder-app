import { FC } from 'react';
import { Loader, Text, useAppSelector } from 'shared';
import { TodoCard } from 'entities';
import { TodoCompleteButton } from 'features';
import { useGetTodosQuery } from '../api/todosApi';

export const TodoList: FC = () => {
	const { isError, isLoading } = useGetTodosQuery(null);
	const { todos } = useAppSelector(state => state.todosList);

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
		</>
	);
};

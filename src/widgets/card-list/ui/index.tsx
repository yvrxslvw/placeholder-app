import { FC, memo, useEffect } from 'react';
import { useActions, useAppSelector } from 'shared';
import { Loader, Text } from 'shared';
import { TodoCard } from 'entities';
import { TodoCompleteButton } from 'features';

export const CardList: FC = memo(() => {
	const { todos, error, isLoading } = useAppSelector(state => state.todosList);
	const { getTodos } = useActions();

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			{error && <Text>An unexpected error occurred... {error} :(</Text>}
			{todos &&
				todos.length > 0 &&
				todos.map(todo => (
					<TodoCard todo={todo} key={todo.id} toggleButton={<TodoCompleteButton todoId={todo.id - 1} />} />
				))}
		</>
	);
});

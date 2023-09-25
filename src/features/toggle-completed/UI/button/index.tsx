import { FC, memo } from 'react';
import { Button, useActions, useAppSelector } from 'shared';

interface TodoCompleteButtonProps {
	todoId: number;
}

export const TodoCompleteButton: FC<TodoCompleteButtonProps> = memo(({ todoId }) => {
	const { completed } = useAppSelector(state => state.todosList.todos[todoId]);
	const { toggleCompletedById } = useActions();

	return <Button onClick={() => toggleCompletedById(todoId)}>Mark as {completed ? 'uncompleted' : 'completed'}</Button>;
});

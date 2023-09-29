import { FC } from 'react';
import { Button, useActions } from 'shared';

interface TodoCompleteButtonProps {
	todoId: number;
	completed: boolean;
}

export const TodoCompleteButton: FC<TodoCompleteButtonProps> = ({ todoId, completed }) => {
	const { toggleCompletedById } = useActions();

	const onClickHandler = () => {
		toggleCompletedById(todoId);
	};

	return <Button onClick={onClickHandler}>Mark as {completed ? 'uncompleted' : 'completed'}</Button>;
};

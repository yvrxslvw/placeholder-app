import { FC } from 'react';
import { Button, useActions } from 'shared';

interface TodoCompleteButtonProps {
	todoId: number;
	completed: boolean;
}

export const TodoCompleteButton: FC<TodoCompleteButtonProps> = ({ todoId, completed }) => {
	const { toggleCompleted } = useActions();

	const onClickHandler = () => {
		toggleCompleted(todoId);
	};

	return <Button onClick={onClickHandler}>Mark as {completed ? 'uncompleted' : 'completed'}</Button>;
};

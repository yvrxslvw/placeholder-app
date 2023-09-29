import { FC, ReactNode } from 'react';
import { Card, Heading, ITodo, Mark, Text } from 'shared';
import s from './style.module.scss';

interface TodoCardProps {
	todo: ITodo;
	toggleButton: ReactNode;
}

export const TodoCard: FC<TodoCardProps> = ({ todo, toggleButton }) => {
	return (
		<Card className={s.todoCard}>
			<Heading level={4} className={s.title}>
				Todo #{todo.id}:
				<Mark success={todo.completed} className={s.mark}>
					{todo.completed ? 'completed' : 'uncompleted'}
				</Mark>
			</Heading>
			<Text className={s.text}>{todo.title}</Text>
			{toggleButton}
		</Card>
	);
};

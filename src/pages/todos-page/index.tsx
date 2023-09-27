import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading } from 'shared';
import { TodoList } from 'widgets';

export const TodosPage: FC = () => {
	return (
		<Container>
			<Heading level={2} className={s.title}>
				Todo list:
			</Heading>
			<TodoList />
		</Container>
	);
};

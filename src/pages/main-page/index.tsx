import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading, Layout } from 'shared';
import { TodoList } from 'widgets';

export const MainPage: FC = () => {
	return (
		<Layout>
			<Container>
				<Heading level={2} className={s.title}>
					Todo list:
				</Heading>
				<TodoList />
			</Container>
		</Layout>
	);
};

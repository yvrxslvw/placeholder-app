import { FC } from 'react';
import s from './style.module.scss';
import { Heading } from 'shared';
import { CardList } from 'widgets';

export const MainPage: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<Heading level={2} className={s.title}>
					Todo list:
				</Heading>
				<CardList />
			</div>
		</div>
	);
};

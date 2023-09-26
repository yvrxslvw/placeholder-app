import { FC, PropsWithChildren } from 'react';
import s from './style.module.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={s.wrapper}>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};

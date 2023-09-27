import { FC, PropsWithChildren } from 'react';
import s from './style.module.scss';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={s.wrapper}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

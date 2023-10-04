import { FC } from 'react';
import s from './style.module.scss';
import { Container } from '.';
import { Link } from 'react-router-dom';
import { ROUTER_PATHS } from 'shared';

export const Header: FC = () => {
	return (
		<header>
			<Container>
				<div className={s.header__row}>
					<Link to={ROUTER_PATHS.main} className={s.link}>
						Main page
					</Link>
					<Link to={ROUTER_PATHS.todos} className={s.link}>
						Todos
					</Link>
					<Link to={ROUTER_PATHS.users} className={s.link}>
						Users
					</Link>
				</div>
			</Container>
		</header>
	);
};

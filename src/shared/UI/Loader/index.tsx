import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

export const Loader: FC<HTMLAttributes<HTMLElement>> = ({ className, ...rest }) => {
	return (
		<div className={cn(s.root, className)} {...rest}>
			<h3>Loading...</h3>
			<div className={s.loader} />
		</div>
	);
};

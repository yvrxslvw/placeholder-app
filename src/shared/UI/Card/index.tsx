import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}

export const Card: FC<CardProps> = ({ children, className, ...rest }) => {
	return (
		<section className={cn(s.card, className)} {...rest}>
			{children}
		</section>
	);
};

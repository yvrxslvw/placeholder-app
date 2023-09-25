import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface ButtonProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(s.button, className)} {...rest}>
			{children}
		</button>
	);
};

import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface HeadingProps extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5;
}

export const Heading: FC<HeadingProps> = ({ children, level, className, ...rest }) => {
	return (
		<h2 className={cn(s.heading, s[`level-${level}`], className)} {...rest}>
			{children}
		</h2>
	);
};

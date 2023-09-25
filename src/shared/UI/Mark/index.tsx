import { FC, HTMLAttributes, PropsWithChildren, memo } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface MarkProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	success?: boolean;
}

export const Mark: FC<MarkProps> = memo(({ children, success, className, ...rest }) => {
	return (
		<span className={cn(s.mark, { [s.success]: success }, className)} {...rest}>
			{children}
		</span>
	);
});

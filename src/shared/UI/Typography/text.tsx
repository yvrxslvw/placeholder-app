import { FC, HTMLAttributes, PropsWithChildren, memo } from 'react';
import cn from 'classnames';
import s from './style.module.scss';

interface TextProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {}

export const Text: FC<TextProps> = memo(({ children, className, ...rest }) => {
	return (
		<p className={cn(s.text, className)} {...rest}>
			{children}
		</p>
	);
});

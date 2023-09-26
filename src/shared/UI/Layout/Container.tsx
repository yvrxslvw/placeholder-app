import { FC, PropsWithChildren } from 'react';
import s from './style.module.scss';

export const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className={s.container}>{children}</div>;
};

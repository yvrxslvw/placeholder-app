import { FC } from 'react';

export interface IRoute {
	Element: FC;
	path: string;
}

export const enum ROUTER_PATHS {
	main = '/',
	todos = '/todos',
}

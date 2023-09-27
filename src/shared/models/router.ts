import { FC } from 'react';

export interface IRoute {
	name: string;
	Element: FC;
	path: string;
}

export const enum ROUTER_PATHS {
	todos = '/todos',
}

import { FC } from 'react';
import { ROUTER_PATHS } from 'shared';
import { TodosPage } from './todos-page';
import { MainPage } from './main-page';
import { UsersPage } from './users-page';

interface IRoute {
	Element: FC;
	path: ROUTER_PATHS;
}

export const PublicRoutes: IRoute[] = [
	{ Element: TodosPage, path: ROUTER_PATHS.todos },
	{ Element: MainPage, path: ROUTER_PATHS.main },
	{ Element: UsersPage, path: ROUTER_PATHS.users },
];

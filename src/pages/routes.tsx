import { IRoute, ROUTER_PATHS } from 'shared';
import { TodosPage } from './todos-page';
import { MainPage } from './main-page';

export const PublicRoutes: IRoute[] = [
	{ Element: TodosPage, path: ROUTER_PATHS.todos },
	{ Element: MainPage, path: ROUTER_PATHS.main },
];

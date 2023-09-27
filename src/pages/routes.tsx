import { IRoute, ROUTER_PATHS } from 'shared';
import { TodosPage } from './todos-page';

export const PublicRoutes: IRoute[] = [{ name: 'Todos', Element: TodosPage, path: ROUTER_PATHS.todos }];

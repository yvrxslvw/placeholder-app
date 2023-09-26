import { Todos } from 'widgets';

export const rootAction = {
	...Todos.actions,
	getTodos: Todos.getTodos,
};

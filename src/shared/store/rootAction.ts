import { todosSlice, getTodos } from 'widgets';

export const rootAction = {
	...todosSlice.actions,
	getTodos
};

import { ITodo } from 'shared';

export const getTodoList = (entries: Record<number, ITodo>): ITodo[] => {
	return Object.values(entries).map(todo => todo);
};

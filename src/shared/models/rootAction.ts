import { Todo, User } from 'entities';

export const rootAction = {
	...Todo.actions,
	...User.actions,
};

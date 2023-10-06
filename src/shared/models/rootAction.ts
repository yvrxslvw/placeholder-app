import { Todo, User, Post } from 'entities';

export const rootAction = {
	...Todo.actions,
	...User.actions,
	...Post.actions,
};

import { IPost, ITodo, IUser } from 'shared';

export const getTodoList = (entries: Record<number, ITodo>): ITodo[] => {
	return Object.values(entries).map(todo => todo);
};

export const getUserList = (entries: Record<number, IUser>): IUser[] => {
	return Object.values(entries).map(todo => todo);
};

export const getPostList = (entries: Record<number, IPost>): IPost[] => {
	return Object.values(entries).map(todo => todo);
};

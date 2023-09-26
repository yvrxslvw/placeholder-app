import { useEffect } from 'react';
import { useActions, useAppSelector } from 'shared';

export const useTodos = () => {
	const todos = useAppSelector(state => state.todosList);
	const { getTodos } = useActions();

	useEffect(() => {
		getTodos();
	}, []);

	return { ...todos };
};

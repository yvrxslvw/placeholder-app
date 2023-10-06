import { useState, useEffect } from 'react';
import { useActions, useAppSelector, useDynamicPagination, useGetTodosQuery, useGetUsersQuery } from 'shared';

export const useTodosList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [_limit] = useState(10);
	const { entries, totalCount, currentPage } = useAppSelector(state => state.todo);
	const { nextTodoPage } = useActions();
	const { isLoading: isLoadingTodos, isError: isErrorTodos, isFetching } = useGetTodosQuery({ _limit, _page: currentPage });
	const { isLoading: isLoadingUsers, isError: isErrorUsers } = useGetUsersQuery(null);
	const { isPaginationLoading } = useDynamicPagination(isFetching, totalCount, _limit, currentPage, nextTodoPage);

	useEffect(() => {
		if (isLoadingTodos || isLoadingUsers) setIsLoading(true);
		else setIsLoading(false);
	}, [isLoadingTodos, isLoadingUsers]);

	useEffect(() => {
		if (isErrorTodos || isErrorUsers) setIsError(true);
		else setIsError(false);
	}, [isErrorTodos, isErrorUsers]);

	return { isLoading, isError, entries, isPaginationLoading };
};

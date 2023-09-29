import { useState } from 'react';
import { useActions, useAppSelector, useDynamicPagination } from 'shared';
import { useGetTodosQuery } from 'widgets/todo-list/api/todosApi';

export const usePagination = () => {
	const [_limit] = useState(10);
	const { todos, totalCount, page } = useAppSelector(state => state.todosList);
	const { nextPage } = useActions();
	const { isLoading, isError, isFetching } = useGetTodosQuery({ _limit, _page: page });
	const { isPaginationLoading } = useDynamicPagination(isFetching, totalCount, _limit, page, nextPage);

	return { isLoading, isError, todos, isPaginationLoading };
};

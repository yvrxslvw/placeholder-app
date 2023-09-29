import { useState } from 'react';
import { useAppSelector, useDynamicPagination } from 'shared';
import { useGetTodosQuery } from 'widgets/todo-list/api/todosApi';

export const usePagination = () => {
	const [_limit] = useState(10);
	const [_page, setPage] = useState(1);

	const { isLoading, isError, isFetching } = useGetTodosQuery({ _limit, _page });
	const { todos, totalCount } = useAppSelector(state => state.todosList);
	const { isPaginationLoading } = useDynamicPagination(isFetching, totalCount, _limit, _page, setPage);

	return { isLoading, isError, todos, isPaginationLoading };
};

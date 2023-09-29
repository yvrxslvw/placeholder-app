import { useState } from 'react';
import { useActions, useAppSelector, useDynamicPagination, useGetTodosQuery } from 'shared';

export const usePagination = () => {
	const [_limit] = useState(10);
	const { entries, totalCount, currentPage } = useAppSelector(state => state.todo);
	const { nextPage } = useActions();
	const { isLoading, isError, isFetching } = useGetTodosQuery({ _limit, _page: currentPage });
	const { isPaginationLoading } = useDynamicPagination(isFetching, totalCount, _limit, currentPage, nextPage);

	return { isLoading, isError, entries, isPaginationLoading };
};

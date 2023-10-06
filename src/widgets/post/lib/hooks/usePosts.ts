import { useEffect, useState } from 'react';
import { useActions, useAppSelector, useDynamicPagination, useGetPostsQuery, useGetUsersQuery } from 'shared';

export const usePosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [_limit] = useState(10);
	const { entries, totalCount, currentPage } = useAppSelector(state => state.post);
	const { nextPostPage } = useActions();
	const { isLoading: isLoadingPosts, isError: isErrorPosts, isFetching } = useGetPostsQuery({ _limit, _page: currentPage });
	const { isLoading: isLoadingUsers, isError: isErrorUsers } = useGetUsersQuery(null);
	const { isPaginationLoading } = useDynamicPagination(isFetching, totalCount, _limit, currentPage, nextPostPage);

	useEffect(() => {
		if (isLoadingPosts || isLoadingUsers) setIsLoading(true);
		else setIsLoading(false);
	}, [isLoadingPosts, isLoadingUsers]);

	useEffect(() => {
		if (isErrorPosts || isErrorUsers) setIsError(true);
		else setIsError(false);
	}, [isErrorPosts, isErrorUsers]);

	return { isLoading, isError, entries, isPaginationLoading };
};

import { useState, useEffect } from 'react';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

/**
 * Custom hook that asynchronously loads elements from the server on scroll.
 * @param isFetching Fetching state from RTK Query
 * @param totalCount Total number of items at endpoint (usually header "x-total-count" is used for this)
 * @param limit Limit of items per request
 * @param page Current page state
 * @param setNextPage Change current page action creator
 * @returns Object with next request loading state
 */
export const useDynamicPagination = (
	isFetching: boolean,
	totalCount: number,
	limit: number,
	page: number,
	setNextPage: ActionCreatorWithoutPayload,
) => {
	const [requesting, setRequesting] = useState(false);
	const [isPaginationLoading, setIsPaginationLoading] = useState(false);
	const isLimited = totalCount <= limit * page;

	const onScrollHandler = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const innerHeight = window.innerHeight;

		if (scrollHeight - (scrollTop + innerHeight) < 50) setRequesting(true);
	};

	useEffect(() => {
		document.addEventListener('scroll', onScrollHandler);

		return () => document.removeEventListener('scroll', onScrollHandler);
	}, []);

	useEffect(() => {
		if (!isFetching) {
			setRequesting(false);
			setIsPaginationLoading(false);
		}
	}, [isFetching]);

	useEffect(() => {
		if (requesting && !isLimited) {
			setNextPage();
			setIsPaginationLoading(true);
		}
	}, [requesting]);

	return { isPaginationLoading };
};

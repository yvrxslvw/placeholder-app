import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { rootAction } from 'shared';

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

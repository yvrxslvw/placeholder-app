import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { rootAction } from 'app';

export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

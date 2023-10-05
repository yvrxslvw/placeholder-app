import { CombinedState, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '.';
import { IUser } from 'shared';

export const userApiFulfilled = (state: CombinedState<UserState>, action: PayloadAction<IUser[]>) => {
	const entries = action.payload.reduce((record, user: IUser) => {
		record[user.id] = user;
		return record;
	}, {} as Record<number, IUser>);

	state.entries = { ...state.entries, ...entries };
};

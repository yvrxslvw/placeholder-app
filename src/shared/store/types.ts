import { store } from '../../app/store';

export type rootState = ReturnType<typeof store.getState>;

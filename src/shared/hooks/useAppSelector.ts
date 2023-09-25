import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { rootState } from 'shared';

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

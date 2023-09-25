import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { rootState } from 'app';

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

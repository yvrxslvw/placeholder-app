import compose from 'compose-function';
import { withStore } from './with-store';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter, withStore);

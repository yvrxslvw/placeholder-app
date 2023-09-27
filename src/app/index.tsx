import '@styles';
import { withProviders } from './providers';
import { Routing } from 'pages';

const App = () => <Routing />;

export default withProviders(App);
export * from './store';

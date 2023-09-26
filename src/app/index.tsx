import { FC } from 'react';
import '@styles';
import { MainPage } from 'pages';
import { withProviders } from './providers';

const App: FC = () => <MainPage />;

export default withProviders(<App />);
export * from './store';

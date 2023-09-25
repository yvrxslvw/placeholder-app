import { FC } from 'react';
import '@styles';
import { MainPage } from 'pages';
import { withProviders } from './providers';

const App: FC = () => {
	return <MainPage />;
};

export default withProviders(<App />);
export * from './store';

import { FC } from 'react';
import './style.scss';
import { MainPage } from 'pages';
import { withProviders } from './providers';

const App: FC = () => {
	return <MainPage />;
};

export default withProviders(<App />);
export * from './store';

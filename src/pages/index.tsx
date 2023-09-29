import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes } from './routes';
import { Layout, ROUTER_PATHS } from 'shared';

export const Routing: FC = () => {
	return (
		<Layout>
			<Routes>
				{PublicRoutes.map(({ path, Element }) => (
					<Route element={<Element />} path={path} key={path} />
				))}

				<Route element={<Navigate to={ROUTER_PATHS.main} replace />} path='/*' />
			</Routes>
		</Layout>
	);
};

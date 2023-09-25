import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			app: '/src/app',
			shared: '/src/shared',
			pages: '/src/pages',
			widgets: '/src/widgets',
			entities: '/src/entities',
			features: '/src/features',
			'@styles': '/src/shared/styles/index.scss',
		},
	},
});

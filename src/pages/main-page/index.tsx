import { FC } from 'react';
import s from './style.module.scss';
import { Container, Heading, Text } from 'shared';

export const MainPage: FC = () => {
	return (
		<Container>
			<Heading level={1} className={s.title}>
				PlaceHolder Application
			</Heading>
			<Text>
				The application was created by{' '}
				<a href='https://github.com/yvrxslvw' target='_blank'>
					yvrxslvw
				</a>{' '}
				to self-improve some techniques...
			</Text>
			<Text>The website contains various pages with mock data such as todos, users, photos, etc.</Text>
			<Text>Enjoy and have fun :)</Text>
		</Container>
	);
};

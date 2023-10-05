import { FC } from 'react';
import s from './style.module.scss';
import { Card, Heading, IUser, Text } from 'shared';

interface UserInfoProps {
	user: IUser;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
	return (
		<Card className={s.userInfo}>
			<Text className={s.item}>ID: {user.id}</Text>
			<Text className={s.item}>Name: {user.name}</Text>
			<Text className={s.item}>Username: {user.username}</Text>
			<Text className={s.item}>Email: {user.email}</Text>
			<Text className={s.item}>Phone: {user.phone}</Text>
			<Text className={s.item}>Website: {user.website}</Text>
			<ul className={s.list}>
				<Heading level={4} className={s.title}>
					Address:
				</Heading>
				<li className={s.item}>
					<Text>Street: {user.address.street}</Text>
				</li>
				<li className={s.item}>
					<Text>Suite: {user.address.suite}</Text>
				</li>
				<li className={s.item}>
					<Text>City: {user.address.city}</Text>
				</li>
				<li className={s.item}>
					<Text>Zipcode: {user.address.zipcode}</Text>
				</li>
				<ul className={s.list}>
					<Heading level={4} className={s.title}>
						Geo:
					</Heading>
					<li className={s.item}>
						<Text>Lat: {user.address.geo.lat}</Text>
					</li>
					<li className={s.item}>
						<Text>Lng: {user.address.geo.lng}</Text>
					</li>
				</ul>
			</ul>
			<ul className={s.list}>
				<Heading level={4} className={s.title}>
					Company:
				</Heading>
				<li className={s.item}>
					<Text>Name: {user.company.name}</Text>
				</li>
				<li className={s.item}>
					<Text>Catch Phrase: {user.company.catchPhrase}</Text>
				</li>
				<li className={s.item}>
					<Text>BS: {user.company.bs}</Text>
				</li>
			</ul>
		</Card>
	);
};

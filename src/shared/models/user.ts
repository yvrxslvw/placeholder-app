interface AdressGeo {
	lat: string;
	lng: string;
}

interface UserAdress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: AdressGeo;
}

interface UserCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAdress;
	phone: string;
	website: string;
	company: UserCompany;
}

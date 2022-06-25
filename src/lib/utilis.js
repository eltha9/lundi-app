import {httpRequest} from './http';

export const getAvatarLink = (userId) => {
	return '/assets/test/avatar.jpeg';
	const data = httpRequest({url: `/avatar?id=${userId}`});
	return data.imgLink;
};

export const getUserInformation = (userId) => {
	return {
		firstName: 'Elmo',
		lastName: '',
		profilePic: '/assets/test/avatar.jpeg',
		email: 'elmo@sesame.street',
		role: 'Lead dev',
        userPerm:'admin',
        lastActivity:"2022-06-20",
        createdDate:"2022-03-02",
        progress:50,
		id: userId,
	};
	const data = httpRequest({url: `/user?id=${userId}`});
	return data;
};

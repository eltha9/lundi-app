import {httpRequest} from './http';

export const getAvatarLink = (userId) => {
	return './assets/test/avatar.jpeg';
	const data = httpRequest({url: `/avatar?id=${userId}`});
	return data.imgLink;
};

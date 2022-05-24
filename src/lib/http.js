export const httpRequest = async ({url = '', method = 'GET', body = {}}) => {
	const options = {
		url,
		method,
		body,
	};
	const data = await fetch(options);
	return data.json();
};

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
        templates:[
            {
                id: "upyzer",
                name:"nom de template",
                teamName:"team plop",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "upyzer",
                name:"nom de template",
                teamName:"team plop",
                progress: 95,
                docs:[
                    "doc id"
                ]
            },
            
        ],
        documents:[
            {
                name:"plop.pdf",
                uploadName:"contrat de travail",
                uploadDate:"2022-06-22",
                teamName:"la team name",
                templateName:"administratif",
                date:"2022-04-22",
                status:"toLate",
                id:"azeaze",
            },
            {
                name:"plop.pdf",
                uploadName:"contrat de travail",
                uploadDate:"2022-06-22",
                teamName:"la team name",
                templateName:"administratif",
                date:"2022-04-22",
                status:"good",
                id:"azeaze",
            },
        ]
	};
	const data = httpRequest({url: `/user?id=${userId}`});
	return data;
};

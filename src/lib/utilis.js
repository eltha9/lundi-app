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
        userPerm:'onboardee',
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
export const login =(psw,email)=>{
    return {
        jwt: "agzryozetrgouaeroayertg",
        me:{
            firstName: 'Elmo',
            lastName: '',
            profilePic: '/assets/test/avatar.jpeg',
            email: 'elmo@sesame.street',
            role: 'Lead dev',
            userPerm:'onboardee',
            lastActivity:"2022-06-20",
            createdDate:"2022-03-02",
            progress:50,
            id: "ageruogyat",
            templates:[
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plop",
                    progress: 45,
                    lastUpdate: '2022-03-02',
                    docs:[
                        "doc id"
                    ]
                },
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plop",
                    progress: 45,
                    lastUpdate: '2022-03-02',
                    docs:[
                        "doc id"
                    ]
                },
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plap",
                    progress: 95,
                    lastUpdate: '2022-03-02',
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
            ],
            settings: {
                favs: [
                  {
                    title: "fav1",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                ],
              },
        },
    };
    const data = httpRequest({url: `/login`});
	return data;
}
export const getMe = (jwt)=>{
    return {
            firstName: 'Elmo',
            lastName: '',
            profilePic: '/assets/test/avatar.jpeg',
            email: 'elmo@sesame.street',
            role: 'Lead dev',
            userPerm:'onboardee',
            lastActivity:"2022-06-20",
            createdDate:"2022-03-02",
            progress:50,
            id: "ageruogyat",
            templates:[
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plop",
                    progress: 45,
                    lastUpdate: '2022-03-02',
                    docs:[
                        "doc id"
                    ]
                },
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plop",
                    progress: 45,
                    lastUpdate: '2022-03-02',
                    docs:[
                        "doc id"
                    ]
                },
                {
                    id: "upyzer",
                    name:"nom de template",
                    teamName:"team plap",
                    progress: 95,
                    lastUpdate: '2022-03-02',
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
            ],
            settings: {
                favs: [
                  {
                    title: "fav1",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                  {
                    title: "fav2",
                    link: "",
                  },
                ],
              },
    };
    const data = httpRequest({url: `/me`});
	return data;
}
export const getCompagnieInformation= (jwt)=>{
    return {
        compagnie: {
            name: "Robert Space Industry",
            logo: "/assets/test/rsi.png",
            teams: [
              {
                id: "hazkeh",
                name: "test",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              },
              {
                id: "haazeazeazeh",
                name: "test",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              },
              {
                id: "haazeajkljiu",
                name: "test",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              },
              {
                id: "haazeajkljidsu",
                name: "test",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              },
              {
                id: "ma-super-team",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-team0",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-team9",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-tea5m",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-team4",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-team3",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
              {
                id: "ma-super-team2",
                name: "Ma super team",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-20",
                isFav: true,
              },
            ],
          },
    }
    const data = httpRequest({url: ``});
	return data;
}
export const getMyTeam = (jwt)=>{
    return {
        name:"Team design",
        id:"auzgeiugaze",
        members:[
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.street',
                role: 'Lead dev',
                id:"yuerouryt"
            },
        ]
    }
    const data = httpRequest({url: ``});
	return data;
}
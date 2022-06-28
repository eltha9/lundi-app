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
		email: 'elmo@sesame.stree',
		role: 'Lead dev',
        userPerm:'admin',
        lastActivity:"2022-06-20",
        createdDate:"2022-03-02",
        progress:50,
		id: userId,
        templates:[
            {
                id: "temp1",
                name:"Arriver",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp3",
                name:"Bonne conduite en entreprise",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp2",
                name:"Utilisation des Systèmes d'information",
                teamName:"Team SI",
                progress: 95,
                docs:[
                    "doc id"
                ]
            },
            
        ],
        documents:[
            {
                name:"Contrat-de-travail.pdf",
                uploadName:"contrat de travail",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
                date:"2022-04-22",
                status:"toLate",
                id:"azeaze",
            },
            {
                name:"chartre-informatique.pdf",
                uploadName:"Chartre informatique",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
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
            firstName: 'Jean Michel',
		lastName: 'Genestier',
		profilePic: '/assets/test/jmg.jpg',
		email: 'jm@le-raincy.fr',
		role: 'Lead dev',
        userPerm:'admin',
        lastActivity:"2022-06-20",
        createdDate:"2022-03-02",
        progress:50,
		id: "az1",
        templates:[
            {
                id: "temp1",
                name:"Arriver",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp3",
                name:"Bonne conduite en entreprise",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp2",
                name:"",
                teamName:"team plop",
                progress: 95,
                docs:[
                    "doc id"
                ]
            },
            
        ],
        documents:[
            {
                name:"Contrat-de-travail.pdf",
                uploadName:"contrat de travail",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
                date:"2022-04-22",
                status:"toLate",
                id:"azeaze",
            },
            {
                name:"chartre-informatique.pdf",
                uploadName:"Chartre informatique",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
                date:"2022-04-22",
                status:"good",
                id:"azeaze",
            },
        ],
            settings: {
                favs: [
                  
                ],
              },
        },
    };
    const data = httpRequest({url: `/login`});
	return data;
}
export const getMe = (jwt)=>{
    return {
        firstName: 'Jean Michel',
		lastName: 'Genestier',
		profilePic: '/assets/test/jmg.jpg',
		email: 'jm@le-raincy.fr',
		role: 'Lead dev',
        userPerm:'admin',
        lastActivity:"2022-06-20",
        createdDate:"2022-03-02",
        progress:50,
		id: "az1",
        templates:[
            {
                id: "temp1",
                name:"Arriver",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp3",
                name:"Bonne conduite en entreprise",
                teamName:"Team rh",
                progress: 45,
                docs:[
                    "doc id"
                ]
            },
            {
                id: "temp2",
                name:"",
                teamName:"team plop",
                progress: 95,
                docs:[
                    "doc id"
                ]
            },
            
        ],
        documents:[
            {
                name:"Contrat-de-travail.pdf",
                uploadName:"contrat de travail",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
                date:"2022-04-22",
                status:"toLate",
                id:"azeaze",
            },
            {
                name:"chartre-informatique.pdf",
                uploadName:"Chartre informatique",
                uploadDate:"2022-06-22",
                teamName:"Team rh",
                templateName:"Arriver",
                date:"2022-04-22",
                status:"good",
                id:"azeaze",
            },
        ],
            settings: {
                favs: [
                  
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
                name: "Team rh",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              },
              {
                id: "haazeazeazeh",
                name: "Team SI",
                users: ["id1sd", "idsdqs1", "idx1"],
                lastUpdate: "2022-06-18",
                isFav: false,
              }
            ],
          },
    }
    const data = httpRequest({url: ``});
	return data;
}
export const getMyTeam = (jwt)=>{
    return {
        name:"Team rh",
        id:"auzgeiugaze",
        members:[
            {
                firstName: 'Elmo',
                lastName: '',
                profilePic: '/assets/test/avatar.jpeg',
                email: 'elmo@sesame.stree',
                role: 'Lead dev',
                id: "cookied",
                
            },
            {
                firstName: 'Mr',
                lastName: 'Cookie',
                profilePic: '',
                email: 'cookie@cookie.cookie',
                role: 'Senior dev',
                id:"yuerouryt"
            },
        ]
    }
    const data = httpRequest({url: ``});
	return data;
}
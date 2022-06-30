
export const ADMIN = {
    jwt: 'admin',
    me: {
        firstName: 'Alban',
        lastName: 'D',
        profilePic: '/assets/test/jmg.jpg',
        email: 'alban.d@gmail.com',
        role: 'Head of Product',
        userPerm: 'admin',
        lastActivity: '2022-06-20',
        createdDate: '2022-03-02',
        progress: 50,
        id: 'jm-1',
        templates: [
            {
                id: 'temp1',
                name: 'Arriver',
                teamName: 'Resource Humaine',
                progress: 45,
                docs: ['doc id'],
            },
            {
                id: 'temp3',
                name: 'Bonne conduite en entreprise',
                teamName: 'Resource Humaine',
                lastUpdate: '2022-06-20',
                progress: 45,
                docs: ['doc id'],
            },
            {
                id: 'temp2',
                name: 'La production',
                teamName: 'Resource Humaines',
                lastUpdate: '2022-06-20',
                progress: 95,
                docs: ['doc id'],
            },
        ],
        documents: [
            {
                name: 'Contrat-de-travail.pdf',
                uploadName: 'contrat de travail',
                uploadDate: '2022-06-22',
                teamName: 'Resource Humaine',
                templateName: 'Arriver',
                date: '2022-04-22',
                status: 'toLate',
                id: 'azeaze',
            },
            {
                name: 'charte-informatique.pdf',
                uploadName: 'Charte informatique',
                uploadDate: '2022-06-22',
                teamName: 'Resource Humaine',
                templateName: 'Arriver',
                date: '2022-04-22',
                status: 'good',
                id: 'azeaze',
            },
        ],
        settings: {
            favs: [],
        },
    }
}

export const ONBOARDEE = {
    jwt: 'onboardee',
    me: {
        firstName: 'Gaetan',
        lastName: 'A',
        profilePic: '/assets/test/jmg.jpg',
        email: 'gaetan.a@gmail.com',
        role: 'Lead dev',
        userPerm: 'onboardee',
        lastActivity: '2022-06-20',
        createdDate: '2022-03-02',
        progress: 50,
        id: 'ga-1',
        templates: [
            {
                id: 'temp1',
                name: 'Arriver',
                teamName: 'Resource Humaine',
                progress: 45,
                docs: ['doc id'],
            },
            {
                id: 'temp3',
                name: 'Bonne conduite en entreprise',
                teamName: 'Resource Humaine',
                lastUpdate: '2022-06-20',
                progress: 45,
                docs: ['doc id'],
            },
            {
                id: 'temp2',
                name: 'La production',
                teamName: 'Resource Humaines',
                lastUpdate: '2022-06-20',
                progress: 95,
                docs: ['doc id'],
            },
        ],
        documents: [
            {
                name: 'Contrat-de-travail.pdf',
                uploadName: 'contrat de travail',
                uploadDate: '2022-06-22',
                teamName: 'Resource Humaine',
                templateName: 'Arriver',
                date: '2022-04-22',
                status: 'toLate',
                id: 'azeaze',
            },
            {
                name: 'charte-informatique.pdf',
                uploadName: 'Charte informatique',
                uploadDate: '2022-06-22',
                teamName: 'Resource Humaine',
                templateName: 'Arriver',
                date: '2022-04-22',
                status: 'good',
                id: 'azeaze',
            },
        ],
        settings: {
            favs: [],
        },
    }
}

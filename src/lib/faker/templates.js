export const TEMPALTES = [
	{
		id: 'template-1',
		name: 'Bienvenue chez nous !',
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-2',
		name: "Découvrir l'équipe",
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-3',
		name: 'La vie chez Frichti ',
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-4',
		name: 'La vente chez Frichti',
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-5',
		name: "Les missions de l'account Executive",
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-6',
		name: 'Les comptes et outils à configurer',
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
	{
		id: 'template-7',
		name: 'Les outils pour les sales',
		status: 'toAssign',
		lastUpdate: '2022-06-01',
		tags: ['Tout', 'Junior'],
		users: ['mate-1', 'mate-2', 'mate-3', 'mate-4', 'mate-5','mate-6','mate-7'],
	},
];

export const TEMPLATE = {
	name: 'Bienvenue chez nous !',
	id: 'template-1',
	content: [
		[
			{
				type: 'h1',
				str: 'Bienvenue chez nous !',
			},
			{
				type: 'h2',
				str: "A la découverte de vos collègues, des process, notre état d'esprit, nos projets, nos missions de travail",
			},
			{
				type: 'p',
				subType: '',
				str: "On le sait, ça fait beaucoup d'informations à appréhender ! Pour faciliter ton intégration, nous avons mis en place ce petit template Lundi qui te guidera pas à pas dans l'appréhension de nos méthodes et de notre culture d'entreprise.",
			},
			{
				type: 'h2',
				str: 'Pourquoi Frichti ?',
			},
			{
				type: 'h3',
				str: '1. Manifesto',
			},
			{
				type: 'p',
				subType: '',
				str: "On le sait, ça fait beaucoup d'informations à appréhender ! Pour faciliter ton intégration, nous avons mis en place ce petit template Lundi qui te guidera pas à pas dans l'appréhension de nos méthodes et de notre culture d'entreprise.",
			},
			{
				type: 'h3',
				str: '2. Raison d’être',
			},
			{
				type: 'p',
				subType: '',
				str: "Une approche humaine au cœur de notre dynamique managériale et du rapport au client. Un esprit start-up, grâce à l'innovation constante dans le secteur de la distribution automobile. Et, une qualité d'exécution de référence par le biais de réalisations non négociables telles que la qualité, la rentabilité et nos parts de marché à atteindre.",
			},
			{
				type: 'h3',
				str: '3. Nos engagements',
			},
			{
				type: 'p',
				subType: '',
				str: 'Nous croyons fondamentalement que le talent est distribué à chacun d’entre nous de manière égale. Cela signifie que nous voyons votre expérience unique et que nous croyons en la force de chaque intersection d’ ethnie, de religion ou de croyance, d’origine ethnique, de capacités physiques différente, de structure familiale, de socioéconomique, d’âge, de nationalité ou de citoyenneté, de statut marital, domestique ou de partenariat civil, d’orientation sexuelle, d’identité de genre.',
			},
			{
				type: 'h2',
				str: 'Cohésion d’équipe',
			},
			{
				type: 'toDo',
				items: [
					{
						str: 'Vérifiez que j’ai bien reçu les invitations pour les weekly stand up',
						checked: false,
					},
					{
						str: 'Vérifiez que j’ai bien reçu les invitations pour les séances cohésions et jeux en équipes',
						checked: false,
					},
					{
						str: 'Vérifiez que j’ai bien reçu les invitations récurentes pour les arrivées des nouveaux collaborateurs ',
						checked: false,
					},
					{
						str: 'Renseignez votre nouveau job sur Linnkedin',
						checked: false,
					},
				],
			},
			{
				type: 'h2',
				str: 'Formation ',
			},
			{
				type: 'p',
				subType: '',
				str: 'Pour les nouveaux arrivés, si vous avez réalisé un bootcamp ou venez d’être diplomé durant les 12 dernires mois, veuillez uploder votre certificat de formation.',
			},
			{
				type: 'upload',
				fileName: '',
				fileUrl: '',
			},
		],
		[
			{
				type: 'h2',
				str: 'Votre poste',
			},
			{
				type: 'p',
				subType: '',
				str: 'Tu bénéficieras d’une formation à la prospection, à notre produit et à notre marché, puis d’un accompagnement continu par un leader.',
			},
			{
				type: 'p',
				subType: '',
				str: 'L’équipe outbound sales est aujourd’hui composée de deux personnes. La vente outbound consiste à générer nos propres opportunités, en prospectant des entrepreneurs indépendants et des TPE (cold calling et/ou emailing).',
			},
			{
				type: 'h2',
				str: 'Responsabbilités',
			},
			{
				type: 'p',
				subType: '',
				str: 'Constitution de bases de données, analyses de sites web existants pour prospecter avec des suggestions d’amélioration, prises de rdv au téléphone, en fonction de la montée en compétence et des besoins de Simplébo : réaliser des ventes',
			},
		],
	],
};

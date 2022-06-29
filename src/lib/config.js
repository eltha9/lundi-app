export const ROLES = [
	{
		value: 'admin',
		name: 'Administrateur',
	},
	{
		value: 'editor',
		name: 'Editeur',
	},
	{
		value: 'onboardee',
		name: 'Onboardé',
	},
];
export const SENIORITY = ['senior', 'stagiaire/apprentie', 'junior'];
export const TEMPLATE_STATUS = {
	toAssign: {
		name: 'Prêt  à être assigner',
		textColor: 'text-semantic-positive-500',
		pseudoBgColor: 'bg-semantic-positive-500',
		bgColor: 'bg-semantic-positive-100',
	},
	inUpdate: {
		name: 'En cours de modification',
		textColor: 'text-semantic-warning-500',
		pseudoBgColor: 'bg-semantic-warning-500',
		bgColor: 'bg-semantic-warning-100',
	},
	toFinish: {
		name: 'A finir',
		textColor: 'text-semantic-negative-500',
		pseudoBgColor: 'bg-semantic-negative-500',
		bgColor: 'bg-semantic-negative-100',
	},
};

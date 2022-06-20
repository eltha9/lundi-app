import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const full = {
	me: {
		role: 'admin', // admin, edit, manager, onborder
		firstName: 'Théa',
		lastName: 'D',
		picture: '/assets/test/avatar.jpeg',
		settings: {
			favs: [
				{
					title: 'fav1',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
				{
					title: 'fav2',
					link: '',
				},
			],
		},
	},
	compagnie: {
		name: 'Boite-a.con',
		teams: [
			{
				id: 'hazkeh',
				name: 'test',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-18',
				isFav: false,
			},
			{
				id: 'haazeazeazeh',
				name: 'test',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-18',
				isFav: false,
			},
			{
				id: 'haazeajkljiu',
				name: 'test',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-18',
				isFav: false,
			},
			{
				id: 'haazeajkljidsu',
				name: 'test',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-18',
				isFav: false,
			},
			{
				id: 'ma-super-team',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-team0',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-team9',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-tea5m',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-team4',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-team3',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
			{
				id: 'ma-super-team2',
				name: 'Ma super team',
				users: ['id1sd', 'idsdqs1', 'idx1'],
				lastUpdate: '2022-06-20',
				isFav: true,
			},
		],
	},
};
export default new Vuex.Store({
	state: {
		isSidebarCollapsed: false,
		compagnie: full.compagnie,
		me: full.me,
		createAccount: false,
		timeLineStep: 1,
	},
	getters: {
		getFullName(state) {
			return `${state.me.firstName} ${state.me.lastName}`;
		},
	},
	mutations: {
		setSidebarCollapsed(state, status) {
			state.isSidebarCollapsed = status;
		},
		setTimeLineStep(state, stepNb) {
			state.timeLineStep = stepNb;
		},
		toggleLogin(state, status) {
			if (status) state.createAccount = status;

			state.createAccount = !state.createAccount;
		},
	},
	actions: {},
	modules: {},
});

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
        teams:[
            {
                id:"hazkeh",
                name:"test",
                users:[
                    "id1sd",
                    "idsdqs1",
                    "idx1",
                ]
            },
            {
                id:"haazeazeazeh",
                name:"test",
                users:[
                    "id1sd",
                    "idsdqs1",
                    "idx1",
                ]
            },
            {
                id:"haazeajkljiu",
                name:"test",
                users:[
                    "id1sd",
                    "idsdqs1",
                    "idx1",
                ]
            },
        ]
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

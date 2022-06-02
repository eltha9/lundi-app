import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const full = {
	me: {
		role: 'admin', // admin, edit, manager, onborder
		firstName: 'Théa',
		lastName: 'D',
		picture: './assets/test/avatar.jpeg',
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
	},
};
export default new Vuex.Store({
	state: {
		isSidebarCollapsed: false,
		compagnie: full.compagnie,
		me: full.me,
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
	},
	actions: {},
	modules: {},
});

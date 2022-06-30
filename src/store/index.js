import Vue from 'vue';
import Vuex from 'vuex';
import {login, getCompagnieInformation, getMe} from '@/lib/utilis.js';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isSidebarCollapsed: false,
		compagnie: {},
		me: {},
		JWT: '',
		role: '',
		createAccount: false,
		timeLineStep: 1,
		isDialogOpen: false,
		/**
		 * Possible dialogType
		 *      createTeam
		 *      deleteTemplate
		 *      saveTemplate
		 *      publishTempalte
		 *      invitation
		 *
		 */
		dialogType: null,
		dialogData: {},
	},
	getters: {
		getFullName(state) {
			return `${state.me.firstName} ${state.me.lastName}`;
		},
	},
	mutations: {
		setJWT(state, jwt) {
			state.JWT = jwt;
		},
		setMe(state, me) {
			state.me = me;
			state.role = me.userPerm;
		},
		setCompagnie(state, compagnie) {
			state.compagnie = compagnie;
		},
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
		setIsDialogOpen(state, status) {
			state.isDialogOpen = status;
		},
		setDialogType(state, dialogType) {
			state.dialogType = dialogType;
		},
		setDialogData(state, data) {
			state.dialogData = data;
		},
	},
	actions: {
		/**
		 *      LOGIN
		 */
		logMe(context, {psw = '', email = ''}) {
			const data = login(psw, email);
			if (data.me.id) {
				window.localStorage.setItem('jwt', data.jwt);
				context.commit('setJWT', data.jwt);
				context.commit('setMe', data.me);
				const compagnieData = getCompagnieInformation(data.jwt);
				context.commit('setCompagnie', compagnieData.compagnie);
				return true;
			}
			return false;
		},
		disconectMe(context) {
			window.localStorage.removeItem('jwt');
			context.commit('setJWT', '');
			context.commit('setMe', {});
			context.commit('setCompagnie', {});
			window.location = '/';
		},
		async amIConnected(context, jwt) {
			const data = await getMe(jwt);
			if (data.me.id) {
				window.localStorage.setItem('jwt', jwt);
				context.commit('setJWT', jwt);
				context.commit('setMe', data.me);
				const compagnieData = getCompagnieInformation(jwt);
				context.commit('setCompagnie', compagnieData.compagnie);
				return data.me.userPerm;
			}
			return false;
		},
		/**
		 *      CREATE ACCOUNT
		 */
		createMe() {},

		/**
		 *      DIALOGS
		 */
		openDialog(context, {type, data}) {
			context.commit('setDialogType', type);
			context.commit('setIsDialogOpen', true);
			if (data) context.commit('setDialogData', data);
		},
		closeDialog(context) {
			// if(context.state.dialogType === "saveTemplate") context.state.dialogData.callBack(false)

			context.commit('setIsDialogOpen', false);
			context.commit('setDialogType', null);
			context.commit('setDialogData', {});
		},
		// delete tempalte
		deleteTemplate(context) {
			context.dispatch('closeDialog');
		},
		// create Team
		createTeam(context, teamName) {
			context.dispatch('closeDialog');
		},
		// save templatre
		saveTemplate(context) {
			context.dispatch('closeDialog');
			context.state.dialogData.callBack();
		},
		// publish template
		publishTemplate(context, {seniority = '', forWho = ''}) {
			context.dispatch('closeDialog');
		},
		// invitation
		invitation(context, mails) {
			context.dispatch('closeDialog');
		},
	},
	modules: {},
});

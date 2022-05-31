import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const full = {
    me:{
        role:"",
        firstName:"Théa",
        lastName:"D",
        pictureLink:"./assets/avatar/test/avatar.jpeg",
        settings:{
            favs:[
                {
                    title:"",
                    link:""
                }
            ]
        }
    },
    compagnie:{
        name:"Boite-a.con"
    },

}
export default new Vuex.Store({
	state: {
		isSidebarCollapsed: false,
        compagnie: full.compagnie,
        me: full.me
	},
	getters: {},
	mutations: {
		setSidebarCollapsed(state, status) {
			state.isSidebarCollapsed = status;
		},
	},
	actions: {},
	modules: {},
});

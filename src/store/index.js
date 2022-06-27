import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const full = {
  me: {
    role: "admin", // admin, edit, manager, onborder
    firstName: "Théa",
    lastName: "D",
    picture: "/assets/test/avatar.jpeg",
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
};
export default new Vuex.Store({
  state: {
    isSidebarCollapsed: false,
    compagnie: full.compagnie,
    me: full.me,
    createAccount: false,
    timeLineStep: 1,
    isDialogOpen: false,
    /**
     * Possible dialogType
     *      createTeam
     *      deleteTemplate
     *      saveTemplate
     *      PublishTempalte
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
    openDialog(context, { type, data }) {
        context.commit("setDialogType", type);
        context.commit("setIsDialogOpen", true);
        if (data) context.commit("setDialogData", data);
    },
    closeDialog(context) {
        context.commit("setIsDialogOpen", false);
        context.commit("setDialogType", null);
        context.commit("setDialogData", {});
    },
    // delete tempalte
    deleteTemplate(context) {
        context.dispatch("closeDialog")
    },
    // create Team
    createTeam(context, teamName) {
        context.dispatch("closeDialog")
        
    },
    // save templatre
    saveTemplate(context) {
        context.dispatch("closeDialog")
        
    },
    // publish template
    publishTemplate(context, { seniority = "", forWho = "" }) {
        context.dispatch("closeDialog")
        
    },
    // invitation
    invitation(context, mails){
        context.dispatch("closeDialog")

    },
  },
  modules: {},
});

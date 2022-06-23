import Vue from "vue";
import VueRouter from "vue-router";
import Test from "@/views/other/Test";
import Dashboard from "@/views/Dashboard/index.vue";
import Login from "@/views/Login/index.vue";
import CreateAccount from "@/views/Login/CreateAccount/index.vue";
import Invitation from "@/views/Invitation/index.vue";
import InvitationCreate from "@/views/Invitation/CreateAccount/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/create-account",
    name: "create-account",
    component: CreateAccount,
  },
  {
    path: "/invitation/:id",
    name: "invitation",
    component: Invitation,
  },
  {
    path: "/invitation/create",
    name: "invitation-create",
    component: InvitationCreate,
  },
  {
    path: "/test",
    name: "test-page",
    component: Test,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard",
        name: "dashboard-home",
        component: () => import("../views/Dashboard/subViews/Home/index.vue"),
      },
      {
        path: "/dashboard/:id",
        name: "dashboard-home-team",
        component: () => import("../views/Dashboard/subViews/Home/Team.vue"),
      },
      {
        path: "/teams",
        name: "dashboard-teams",
        component: () => import("../views/Dashboard/subViews/Teams.vue"),
      },
      {
        path: "/templates/:id",
        name: "dashboard-templates",
        component: () => import("../views/Dashboard/subViews/Templates.vue"),
      },
      {
        path: "/templates/create",
        name: "dashboard-templates-create",
        component: () => import("../views/Dashboard/subViews/Templates.vue"),
      },
      {
        path: "/analytics",
        name: "dashboard-analytics",
        component: () =>
          import("../views/Dashboard/subViews/Analytics/index.vue"),
      },
      {
        path: "/analytics/:teamId/:id",
        name: "dashboard-analytics-team-member",
        component: () =>
          import("../views/Dashboard/subViews/Analytics/Member.vue"),
      },
      {
        path: "/collaborators",
        name: "dashboard-collaborators",
        component: () =>
          import("../views/Dashboard/subViews/Collaborators.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

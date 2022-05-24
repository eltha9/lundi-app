import Vue from "vue";
import VueRouter from "vue-router";
import Test from "@/views/other/Test"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "test",
    component: Test
  },
  {
    path: "/dashboard",
    name:"dashboard",
    component: ()=> import("../views/Dashboard/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

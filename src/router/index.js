import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '@/views/other/Test';
import Dashboard from '@/views/Dashboard/index.vue';
import Login from '@/views/Login/index.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
	},
	{
		path: '/test',
		name: 'test-page',
		component: Test,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children: [
			{
				path: '/',
				name: 'dashboard-home',
				component: () => import('../views/Dashboard/subViews/Home.vue'),
			},
			{
				path: '/teams',
				name: 'dashboard-teams',
				component: () => import('../views/Dashboard/subViews/Teams.vue'),
			},
			{
				path: '/templates',
				name: 'dashboard-templates',
				component: () => import('../views/Dashboard/subViews/Templates.vue'),
			},
			{
				path: '/analytics',
				name: 'dashboard-analytics',
				component: () => import('../views/Dashboard/subViews/Analytics.vue'),
			},
			{
				path: '/collaborators',
				name: 'dashboard-collaborators',
				component: () => import('../views/Dashboard/subViews/Collaborators.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

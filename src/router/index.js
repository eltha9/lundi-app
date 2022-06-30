import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '@/views/other/Test';
import Dashboard from '@/views/Dashboard/index.vue';
import Login from '@/views/Login/index.vue';
import CreateAccount from '@/views/Login/CreateAccount/index.vue';
import Invitation from '@/views/Invitation/index.vue';
import InvitationCreate from '@/views/Invitation/CreateAccount/index.vue';
import store from "@/store/index.js"
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
        meta:{
            role:[]
        }
	},
	{
		path: '/create-account',
		name: 'create-account',
		component: CreateAccount,
        meta:{
            role:[]
        }
	},
	{
		path: '/invitation/:id',
		name: 'invitation',
		component: Invitation,
        meta:{
            role:[]
        }
	},
	{
		path: '/invitation/create',
		name: 'invitation-create',
		component: InvitationCreate,
        meta:{
            role:[]
        }
	},
	{
		path: '/test',
		name: 'test-page',
		component: Test,
        meta:{
            role:[]
        }
	},
	{
		path: '/dashboard',
		component: Dashboard,
		children: [
			{
				path: '/dashboard',
				name: 'dashboard-home',
				component: () => import('../views/Dashboard/subViews/Home/index.vue'),
                meta:{
                    role:[]
                }
			},
			{
				path: '/dashboard/:id',
				name: 'dashboard-home-team',
				component: () => import('../views/Dashboard/subViews/Home/Team.vue'),
                meta:{
                    role:[]
                }
			},
			{
				path: '/teams',
				name: 'dashboard-teams',
				component: () => import('../views/Dashboard/subViews/Teams.vue'),
                meta:{
                    role:["editor","admin"]
                }
			},
			{
				path: '/my-team',
				name: 'dashboard-my-team',
				component: () => import('../views/Dashboard/subViews/My-Team.vue'),
                meta:{
                    role:["onboardee"]
                }
			},
			{
				path: '/analytics',
				name: 'dashboard-analytics',
				component: () => import('../views/Dashboard/subViews/Analytics/index.vue'),
                meta:{
                    role:["editor","admin"]
                }
			},
			{
				path: '/analytics/me',
				name: 'dashboard-analytics-me',
				component: () => import('../views/Dashboard/subViews/Analytics/My-Onboarding.vue'),
                meta:{
                    role:["onboardee"]
                }
			},
			{
				path: '/analytics/:teamId/:id',
				name: 'dashboard-analytics-team-member',
				component: () => import('../views/Dashboard/subViews/Analytics/Member.vue'),
                meta:{
                    role:["editor","admin"]
                }
			},
			{
				path: '/collaborators',
				name: 'dashboard-collaborators',
				component: () => import('../views/Dashboard/subViews/Collaborators.vue'),
                meta:{
                    role:["editor","admin"]
                }
			},
		],
	},
    {
        path: '/templates/:id',
        name: 'dashboard-templates',
        component: () => import('../views/Dashboard/subViews/Templates/index.vue'),
        meta:{
            role:[]
        }
    },
    {
        path: '/templates/create/:teamId',
        name: 'dashboard-templates-create',
        component: () => import('../views/Dashboard/subViews/Templates/index.vue'),
        meta:{
            role:["editor","admin"]
        }
    },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

 router.beforeEach(async(to, from, next) => {
    // those routes can be access wihtout login
    if(
        to.name.includes("test") || 
        to.name.includes("login") || 
        to.name.includes("invitation") || 
        to.name.includes("create-account")
    ){
        return next()
    }
    // role checker
    const JWT = window.localStorage.getItem("jwt")
    if(JWT && JWT.trim() !== ""){
        const data = await store.dispatch("amIConnected",JWT)
        if(data === false) return next({name:"login"})
        if(to.meta.role.length === 0) return next()
        if(to.meta.role.includes(data))return next()
        else return next({name:"login"})
    }
    // default palce when you're not log in
    return next({name:"login"})
  })

export default router;

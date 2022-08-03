import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import IndexPage from '@/views/IndexPage.vue'
// import LinePage from '@/views/side/LinePage.vue'
// import GrandpaPage from '@/views/side/GrandpaPage.vue'
// import Map3DPage from '@/views/side/Map3DPage.vue'
// import IronGlobePage from '@/views/side/IronGlobePage.vue'
import SignPage from '@/views/SignPage.vue'
import RegPage from '@/views/RegPage.vue'
import UserPage from '@/views/UserPage.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		redirect: {
			name: 'IndexPage'
		},
		children: [
			{
				path: '',
				name: 'IndexPage',
				component: ()=>import(/* webpackChunkName: "indexPage" */ '@/views/IndexPage.vue'),
				children: [
					{
						path: '',
						name: 'Dashboard',
						component: ()=>import(/* webpackChunkName: "dash" */ '@/views/Dashboard.vue')
					},{
						path: '/line',
						component: ()=>import(/* webpackChunkName: "line" */ '@/views/side/LinePage.vue')
					}, {
						path: '/Grandpa',
						component: ()=>import(/* webpackChunkName: "Grandpa" */ '@/views/side/GrandpaPage.vue')
					}, {
						path: '/map3d',
						component: ()=>import(/* webpackChunkName: "map3d" */ '@/views/side/Map3DPage.vue')
					}, {
						path: '/IronGlobe',
						component: ()=>import(/* webpackChunkName: "IronGlobe" */ '@/views/side/IronGlobePage.vue')
					}
				]
			},
			{
				path: '/sign',
				component: ()=>import(/* webpackChunkName: "sign" */ '@/views/SignPage.vue'),
			},
			{
				path: '/reg',
				component: ()=>import(/* webpackChunkName: "reg" */ '@/views/RegPage.vue'),
			},
			{
				path: '/user',
				component: ()=>import(/* webpackChunkName: "user" */ '@/views/UserPage.vue'),
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router

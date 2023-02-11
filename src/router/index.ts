import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/login/Login.vue')
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('../views/main/Main.vue')
		},
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/notfound/Notfound.vue')
		}
	]
})

router.beforeEach((to) => {
	const token = localCache.getCache(LOGIN_TOKEN)

	if (to.path == '/main' && !token) {
		return '/login'
	}

	if (to.path == '/main') {
		return firstMenu?.url
	}
})

export default router

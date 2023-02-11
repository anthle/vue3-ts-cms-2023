import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import mapMenusToRoutes from '@/utils/map-menus'

interface ILoginState {
	token: string
	userInfo: any
	userMenus: any
}

const useLoginStore = defineStore('login', {
	state: (): ILoginState => ({
		token: '',
		userInfo: {},
		userMenus: []
	}),
	actions: {
		async loginAccountAction(account: IAccount) {
			// 登录请求
			const loginResult = await accountLoginRequest(account)
			const id = loginResult.data.id
			this.token = loginResult.data.token

			// 保存token
			localCache.setCache(LOGIN_TOKEN, this.token)

			// 获取用户信息
			const userInfoResult = await getUserInfoById(id)
			this.userInfo = userInfoResult.data

			localCache.setCache('userInfo', this.userInfo)

			// 获取用户菜单
			const userMenus = await getUserMenusByRoleId(id)
			this.userMenus = userMenus.data

			// 保存用户信息
			localCache.setCache('userMenus', this.userMenus)

			// 根据用户菜单生成路由
			const routes = mapMenusToRoutes(userMenus.data)
			routes.forEach((item) => router.addRoute('main', item))

			router.push('/main')
		},
		loadLocalCacheAction() {
			const token = localCache.getCache(LOGIN_TOKEN)
			const userInfo = localCache.getCache('userInfo')
			const userMenus = localCache.getCache('userMenus')
			if (token && userInfo && userMenus) {
				this.token = token
				this.userInfo = userInfo
				this.userMenus = userMenus
				const routes = mapMenusToRoutes(this.userMenus)
				routes.forEach((item) => router.addRoute('main', item))
			}
		}
	}
})

export default useLoginStore

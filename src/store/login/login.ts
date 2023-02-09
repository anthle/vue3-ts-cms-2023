import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import { defineStore } from 'pinia'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface ILoginState {
	token: string
	userInfo: any
	userMenus: any
}

const useLoginStore = defineStore('login', {
	state: (): ILoginState => ({
		token: localCache.getCache(LOGIN_TOKEN) ?? '',
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

			// 获取用户菜单
			const userMenus = await getUserMenusByRoleId(id)
			this.userMenus = userMenus.data

			router.push('/main')
		}
	}
})

export default useLoginStore

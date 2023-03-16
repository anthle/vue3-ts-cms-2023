import {
	postUsersListData,
	deleteUserById,
	createUserData,
	editUserData,
	postPageListData,
	deletePageData,
	createPageData,
	editPageData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import useMainStore from '../main'

interface ISystemState {
	userList: any[]
	totalCount: number
	pageList: any[]
	pageTotalCount: number
}

const systemStore = defineStore('system', {
	state: (): ISystemState => ({
		userList: [],
		totalCount: 0,

		pageList: [],
		pageTotalCount: 0
	}),
	actions: {
		async postUsersListAction(queryInfo: any) {
			const res = await postUsersListData(queryInfo)

			this.userList = res.data.list
			this.totalCount = res.data.totalCount
		},
		async deleteUserAction(id: number) {
			await deleteUserById(id)

			this.postUsersListAction({ offset: 0, size: 10 })
		},
		async createUserDataAction(userInfo: any) {
			await createUserData(userInfo)
			this.postUsersListAction({ offset: 0, size: 10 })
		},
		async editUserDataAction(id: number, userInfo: any) {
			await editUserData(id, userInfo)

			this.postUsersListAction({ offset: 0, size: 10 })
		},

		async postPageListDataAction(pageName: string, queryInfo: any) {
			const res = await postPageListData(pageName, queryInfo)

			this.pageList = res.data.list
			this.pageTotalCount = res.data.totalCount
		},
		async deletePageAction(pageName: string, id: number) {
			await deletePageData(pageName, id)
			this.postPageListDataAction(pageName, { offset: 0, size: 10 })

			const mainStore = useMainStore()
			mainStore.fetchEntireDataAction()
		},
		async createPageDataAction(pageName: string, params: any) {
			await createPageData(pageName, params)

			this.postPageListDataAction(pageName, { offset: 0, size: 10 })

			const mainStore = useMainStore()
			mainStore.fetchEntireDataAction()
		},
		async editPageDataAction(pageName: string, id: number, params: any) {
			await editPageData(pageName, id, params)

			this.postPageListDataAction(pageName, { offset: 0, size: 10 })

			const mainStore = useMainStore()
			mainStore.fetchEntireDataAction()
		}
	}
})

export default systemStore

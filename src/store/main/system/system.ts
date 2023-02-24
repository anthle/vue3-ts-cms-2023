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

interface ISystemState {
	userList: any[]
	totalCount: number
	pageList: any[]
	pageRTotalCount: number
}

const systemStore = defineStore('system', {
	state: (): ISystemState => ({
		userList: [],
		totalCount: 0,

		pageList: [],
		pageRTotalCount: 0
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
			const res = await createUserData(userInfo)
			console.log(res)

			this.postUsersListAction({ offset: 0, size: 10 })
		},
		async editUserDataAction(id: number, userInfo: any) {
			const res = await editUserData(id, userInfo)
			console.log(res)

			this.postUsersListAction({ offset: 0, size: 10 })
		},

		async postPageListDataAction(pageName: string, queryInfo: any) {
			const res = await postPageListData(pageName, queryInfo)

			this.pageList = res.data.list
			this.pageRTotalCount = res.data.totalCount
		},
		async deletePageAction(pageName: string, id: number) {
			await deletePageData(pageName, id)
			this.postPageListDataAction(pageName, { offset: 0, size: 10 })
		},
		async createPageDataAction(pageName: string, params: any) {
			await createPageData(pageName, params)

			this.postPageListDataAction(pageName, { offset: 0, size: 10 })
		},
		async editPageDataAction(pageName: string, id: number, params: any) {
			await editPageData(pageName, id, params)

			this.postPageListDataAction(pageName, { offset: 0, size: 10 })
		}
	}
})

export default systemStore

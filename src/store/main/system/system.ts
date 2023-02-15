import { postUsersListData, deleteUserById, createUserData, editUserData } from '@/service/main/system/system'
import { defineStore } from 'pinia'

interface ISystemState {
	userList: any[]
	totalCount: number
}

const systemStore = defineStore('system', {
	state: (): ISystemState => ({
		userList: [],
		totalCount: 0
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
		}
	}
})

export default systemStore

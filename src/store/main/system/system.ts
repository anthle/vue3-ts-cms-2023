import { postUsersListData, deleteUserById } from '@/service/main/system'
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
		}
	}
})

export default systemStore

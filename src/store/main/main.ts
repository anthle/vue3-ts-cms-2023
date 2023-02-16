import { postUserRoleList, postUserDepartmentList } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
	entierRoles: any[]
	entierDepartments: any[]
}

const useMainStore = defineStore('main', {
	state: (): IMainState => ({
		entierRoles: [],
		entierDepartments: []
	}),
	actions: {
		async fetchEntireDataAction() {
			const rolesResult = await postUserRoleList()
			const departmentResult = await postUserDepartmentList()
			this.entierRoles = rolesResult.data.list
			this.entierDepartments = departmentResult.data.list
		}
	}
})

export default useMainStore

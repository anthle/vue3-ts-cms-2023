import { postUserRoleList, postUserDepartmentList, postUserMenuList } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
	entierRoles: any[]
	entierDepartments: any[]
	entierMenu: any[]
}

const useMainStore = defineStore('main', {
	state: (): IMainState => ({
		entierRoles: [],
		entierDepartments: [],
		entierMenu: []
	}),
	actions: {
		async fetchEntireDataAction() {
			const rolesResult = await postUserRoleList()
			const departmentResult = await postUserDepartmentList()
			const menuResult = await postUserMenuList()
			this.entierRoles = rolesResult.data.list
			this.entierDepartments = departmentResult.data.list
			this.entierMenu = menuResult.data.list
		}
	}
})

export default useMainStore

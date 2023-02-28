import jlRequest from '..'

export function postUserRoleList() {
	return jlRequest.post({
		url: '/role/list'
	})
}

export function postUserDepartmentList() {
	return jlRequest.post({
		url: '/department/list'
	})
}

export function postUserMenuList() {
	return jlRequest.post({
		url: '/menu/list'
	})
}

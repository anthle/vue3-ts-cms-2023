import jlRequest from '@/service'

export function postUsersListData(queryInfo: any) {
	return jlRequest.post({
		url: '/users/list',
		data: queryInfo
	})
}

export function deleteUserById(id: number) {
	return jlRequest.delete({
		url: `/users/${id}`
	})
}

export function createUserData(data: any) {
	return jlRequest.post({
		url: '/users',
		data
	})
}

export function editUserData(id: number, userInfo: any) {
	return jlRequest.patch({
		url: `/users/${id}`,
		data: userInfo
	})
}

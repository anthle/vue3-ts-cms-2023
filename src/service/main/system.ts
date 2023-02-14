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

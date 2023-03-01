import useLoginStore from '@/store/login/login'

function usePermissions(permissionID: string) {
	const { permissions } = useLoginStore()
	return !!permissions.find((item) => item.includes(permissionID))
}

export default usePermissions

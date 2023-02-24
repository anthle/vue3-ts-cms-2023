import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'

function usePageModal() {
	const modalRef = ref<InstanceType<typeof pageModal>>()

	function handleCreateNewDepartment() {
		modalRef.value?.handleOpenDialog()
	}
	function handleEditDepartment(info: any) {
		const isEdit = true
		modalRef.value?.handleOpenDialog(isEdit, info)
	}

	return {
		modalRef,
		handleCreateNewDepartment,
		handleEditDepartment
	}
}

export default usePageModal

import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'

type editCallback = (info: any) => void

function usePageModal(editCallback?: editCallback) {
	const modalRef = ref<InstanceType<typeof pageModal>>()

	function handleCreateClick() {
		modalRef.value?.handleOpenDialog()
		if (editCallback) editCallback(null)
	}
	function handleEditClick(info: any) {
		const isEdit = true
		modalRef.value?.handleOpenDialog(isEdit, info)
		if (editCallback) editCallback(info)
	}

	return {
		modalRef,
		handleCreateClick,
		handleEditClick
	}
}

export default usePageModal

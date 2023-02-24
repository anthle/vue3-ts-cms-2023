import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
	const contentRef = ref<InstanceType<typeof pageContent>>()
	function handleResetClick() {
		contentRef.value?.fetchPageListData()
	}
	function handleSearchInfo(formData: any) {
		contentRef.value?.fetchPageListData(formData)
	}

	return {
		contentRef,
		handleResetClick,
		handleSearchInfo
	}
}

export default usePageContent

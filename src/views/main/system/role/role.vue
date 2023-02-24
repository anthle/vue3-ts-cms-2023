<template>
	<div class="role">
		<main-search
			:searchConfig="searchConfig"
			@search-info="handleSearchInfo"
			@reset-info="handleResetClick"
		></main-search>
		<page-content
			:contentConfig="contentConfig"
			ref="contentRef"
			@create-new-department-click="handleCreateNewDepartment"
			@edit-department-info-click="handleEditDepartment"
		></page-content>
		<page-modal :modalConfig="modalConfig" ref="modalRef"></page-modal>
	</div>
</template>

<script setup lang="ts" name="role">
import MainSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './configs/search.config'
import contentConfig from './configs/content.config'
import modalConfig from './configs/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const { contentRef, handleResetClick, handleSearchInfo } = usePageContent()
const { modalRef, handleCreateNewDepartment, handleEditDepartment } = usePageModal()
</script>

<style scoped>
.role {
	color: #000;
}
</style>

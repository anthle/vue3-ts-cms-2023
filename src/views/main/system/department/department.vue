<template>
	<div class="department">
		<page-search
			:searchConfig="searchConfig"
			@search-info="handleSearchInfo"
			@reset-info="handleResetClick"
		></page-search>
		<page-content
			:contentConfig="contentConfig"
			ref="contentRef"
			@create-new-department-click="handleCreateNewDepartment"
			@edit-department-info-click="handleEditDepartment"
		>
			<template #name="{ row }">
				<span class="name">{{ row.name }}</span>
			</template>
		</page-content>
		<page-modal ref="modalRef" :modalConfig="modalConfigRef"></page-modal>
	</div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './configs/search.config'
import contentConfig from './configs/content.config'
import modalConfig from './configs/modal.config'
import { computed } from 'vue'
import userMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const modalConfigRef = computed(() => {
	const mainStore = userMainStore()
	const departments = mainStore.entierDepartments.map((item) => {
		return { label: item.name, value: item.id }
	})
	modalConfig.formItems.forEach((item) => {
		if (item.prop === 'parentId') {
			item.options?.push(...departments)
		}
	})
	return modalConfig
})

// 重置查询新建编辑操作放入hooks中
const { contentRef, handleResetClick, handleSearchInfo } = usePageContent()
const { modalRef, handleCreateNewDepartment, handleEditDepartment } = usePageModal()
</script>

<style scoped>
.department {
	color: #000;
}
</style>

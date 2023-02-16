<template>
	<div class="department">
		<department-search @search-info="handleSearchInfo" @reset-info="handleResetClick"></department-search>
		<department-content
			ref="contentRef"
			@create-new-department-click="handleCreateNewDepartment"
			@edit-department-info-click="handleEditDepartment"
		></department-content>
		<department-modal ref="modalRef"></department-modal>
	</div>
</template>

<script setup lang="ts" name="department">
import departmentSearch from './c-cnps/department-search.vue'
import departmentContent from './c-cnps/department-content.vue'
import departmentModal from './c-cnps/department-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof departmentContent>>()
function handleResetClick() {
	contentRef.value?.fetchPageListData()
}
function handleSearchInfo(formData: any) {
	contentRef.value?.fetchPageListData(formData)
}

const modalRef = ref<InstanceType<typeof departmentModal>>()

function handleCreateNewDepartment() {
	modalRef.value?.handleOpenDialog()
}
function handleEditDepartment(info: any) {
	const isEdit = true
	modalRef.value?.handleOpenDialog(isEdit, info)
}
</script>

<style scoped>
.department {
	color: #000;
}
</style>

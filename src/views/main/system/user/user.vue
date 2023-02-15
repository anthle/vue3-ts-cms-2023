<template>
	<div class="user">
		<user-search @search-info="handleGetSearchInfo" @reset-info="handleResetClick"></user-search>
		<user-content
			ref="userContentRef"
			@create-newuser-click="handleCreateUser"
			@edit-userInfo-click="handleEditUser"
		></user-content>
		<user-modal ref="userModalRef"></user-modal>
	</div>
</template>

<script setup lang="ts" name="user">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof userContent>>()

function handleGetSearchInfo(formData: any) {
	userContentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
	userContentRef.value?.fetchUserListData()
}

const userModalRef = ref<InstanceType<typeof userModal>>()

function handleCreateUser() {
	userModalRef.value?.handleOpenDialog()
}

function handleEditUser(userInfo: any) {
	const isEdit = true
	userModalRef.value?.handleOpenDialog(isEdit, userInfo)
}
</script>

<style scoped>
.user {
	color: #000;
}
</style>

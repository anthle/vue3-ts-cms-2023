<template>
	<div class="user">
		<user-search @search-info="handleGetSearchInfo" @reset-info="handleResetClick"></user-search>
		<user-content ref="userContentRef"></user-content>
	</div>
</template>

<script setup lang="ts" name="user">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof userContent>>()

function handleGetSearchInfo(formData: any) {
	userContentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
	userContentRef.value?.fetchUserListData()
}
</script>

<style scoped>
.user {
	color: #000;
}
</style>

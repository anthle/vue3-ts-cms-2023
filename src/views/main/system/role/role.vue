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
			@create-new-department-click="handleCreateClick"
			@edit-department-info-click="handleEditClick"
		></page-content>
		<page-modal :modalConfig="modalConfig" ref="modalRef" :otherInfo="otherInfo">
			<template #menulist>
				<el-tree
					class="elTree"
					ref="elTreeRef"
					:data="entierMenu"
					show-checkbox
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					@check="handleElTreeCheck"
				/>
			</template>
		</page-modal>
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

import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import type { ElTree } from 'element-plus'
import { mapMenuListToIds } from '@/utils/map-menus'

const { contentRef, handleResetClick, handleSearchInfo } = usePageContent()
const { modalRef, handleCreateClick, handleEditClick } = usePageModal(editCallback)

const mainStore = useMainStore()
const { entierMenu } = storeToRefs(mainStore)

let otherInfo: any = ref({})
function handleElTreeCheck(data1: any, data2: any) {
	const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
	otherInfo.value = { menuList }
}

const elTreeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(itemData?: any) {
	if (itemData) {
		nextTick(() => {
			const menuIds = mapMenuListToIds(itemData.menuList)
			elTreeRef?.value?.setCheckedKeys(menuIds)
		})
	} else {
		elTreeRef?.value?.setCheckedKeys([])
	}
}
</script>

<style scoped>
.elTree {
	color: #606266;
}
</style>

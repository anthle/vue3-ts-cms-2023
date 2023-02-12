<template>
	<div class="header-breadcrumb">
		<el-breadcrumb separator="/">
			<template v-for="item in breadcrumb" :key="item.name">
				<el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRoute } from 'vue-router'
import { mapPathToBreadcrumb } from '@/utils/map-menus'
import { computed } from 'vue'

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

const route = useRoute()

const breadcrumb = computed(() => {
	return mapPathToBreadcrumb(route.path, userMenus)
})
</script>

<style lang="less" scoped>
.header-breadcrumb {
	color: #000;
}
</style>

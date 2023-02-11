<template>
	<div class="main-header">
		<div class="menu-icon" @click="handleMenuChangeClick">
			<el-icon size="30px"> <component :is="isFold ? 'Expand' : 'Fold'"> </component></el-icon>
		</div>
		<div class="content">
			<div class="breadcrumb">面包屑</div>
			<div class="info">
				<header-info></header-info>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerInfo from './c-cpns/header-info.vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
function handleMenuChangeClick() {
	isFold.value = !isFold.value
	emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
	display: flex;
	align-items: center;
	height: 100%;
	flex: 1;

	.menu-icon {
		cursor: pointer;
	}
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		padding: 0 18px;
	}
}
</style>

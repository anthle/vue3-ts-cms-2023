<template>
	<div class="main">
		<el-container class="main-content">
			<el-aside :width="isFold ? '60px' : '240px'">
				<main-menus :is-fold="isFold"></main-menus>
			</el-aside>
			<el-container>
				<el-header>
					<main-header @fold-change="handleFoldChange" />
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import MainMenus from '@/components/main-menus/main-menus.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isFold = ref(false)
function handleFoldChange(flag: boolean) {
	isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
	height: 100%;

	.main-content {
		height: 100%;

		.el-aside {
			transition: width 0.5s ease-in-out;
		}

		.el-header {
			background-color: #b3c0d1;
		}

		.el-main {
			background-color: #d3dce6;
		}
	}
}
</style>

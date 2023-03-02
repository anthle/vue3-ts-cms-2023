<template>
	<div class="chart-cards">
		<el-card class="box-card" :header="header">
			<slot>卡片默认内容</slot>
		</el-card>
	</div>
</template>

<script setup lang="ts">
interface IProps {
	header?: string
}
withDefaults(defineProps<IProps>(), {
	header: '卡片标题'
})
</script>

<style lang="less" scoped>
.chart-cards {
	color: #000;
}
</style>

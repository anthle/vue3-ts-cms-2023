<template>
	<div class="base-charts">
		<div class="echarts" ref="echartsRef" style="width: 100%; height: 300px"></div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

interface IProps {
	options: EChartsOption
}

const props = defineProps<IProps>()
const echartsRef = ref<HTMLElement | null>(null)

onMounted(() => {
	const echartsInstance = echarts.init(echartsRef.value as HTMLElement, 'light', {
		renderer: 'canvas'
	})
	watchEffect(() => echartsInstance.setOption(props.options))
})
</script>

<style lang="less" scoped>
.base-charts {
	color: #000;
}
</style>

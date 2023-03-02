<template>
	<div class="line-echart">
		<base-echarts :options="options"></base-echarts>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEcharts from './base-echarts.vue'
import type { EChartsOption } from 'echarts'

const props = defineProps<{
	labels: string[]
	values: string[]
}>()

const options = computed<EChartsOption>(() => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: props.labels
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '分类销量统计',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: props.values
			}
		]
	}
})
</script>

<style lang="less" scoped></style>

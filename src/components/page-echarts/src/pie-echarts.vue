<template>
	<div class="pie-charts">
		<base-charts :options="options"></base-charts>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCharts from './base-echarts.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types'

interface IProps {
	pieData: IEchartValueType[]
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
	return {
		title: {
			text: 'Referer of a Website',
			subtext: 'Fake Data',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: props.pieData,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	}
})
</script>

<style lang="less" scoped>
.pie-charts {
	color: #000;
}
</style>

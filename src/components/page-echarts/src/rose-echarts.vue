<template>
	<div class="rose-echarts">
		<base-echarts :options="options"></base-echarts>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import baseEcharts from './base-echarts.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types'

interface IProps {
	roseData: IEchartValueType[]
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			left: 'center',
			top: 'bottom'
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: '销售数量',
				type: 'pie',
				radius: [20, 140],
				roseType: 'area',
				itemStyle: {
					borderRadius: 5
				},
				data: props.roseData
			}
		]
	}
})
</script>

<style lang="less" scoped>
.rose-echarts {
	color: #000;
}
</style>

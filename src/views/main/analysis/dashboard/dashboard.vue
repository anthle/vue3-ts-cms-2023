<template>
	<div class="dashboard">
		<div class="header">
			<el-row :gutter="20">
				<template v-for="item in amountList" :key="item.amount">
					<el-col :span="6">
						<count-cards v-bind="item"></count-cards>
					</el-col>
				</template>
			</el-row>
		</div>
		<div class="content">
			<el-row :gutter="10">
				<el-col :span="7">
					<chart-cards header="分类商品数量(饼图)">
						<pie-echarts :pie-data="showGoodsCategoryCount"></pie-echarts>
					</chart-cards>
				</el-col>
				<el-col :span="10">
					<chart-cards>
						<!-- <line-echarts></line-echarts> -->
					</chart-cards>
				</el-col>
				<el-col :span="7">
					<chart-cards header="分类商品数量(玫瑰图)">
						<rose-echarts :rose-data="showGoodsCategoryCount"></rose-echarts>
					</chart-cards>
				</el-col>
			</el-row>
		</div>
		<div class="footer">
			<el-row :gutter="10">
				<el-col :span="12">
					<chart-cards>
						<line-echarts :values="showGoodsCategorySale.values" :labels="showGoodsCategorySale.labels"></line-echarts>
					</chart-cards>
				</el-col>
				<el-col :span="12">
					<chart-cards>
						<bar-echart :values="showGoodsCategoryFavor.values" :labels="showGoodsCategoryFavor.labels"></bar-echart>
					</chart-cards>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script setup lang="ts" name="dashboard">
import { computed } from 'vue'
import countCards from './cnps/count-cards.vue'
import chartCards from './cnps/chart-cards.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import { PieEcharts, roseEcharts, barEchart, lineEcharts } from '@/components/page-echarts'

const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataActions()
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor } = storeToRefs(analysisStore)

const showGoodsCategoryCount = computed(() => {
	return goodsCategoryCount.value.map((item) => {
		return { name: item.name, value: item.goodsCount }
	})
})
const showGoodsCategorySale = computed(() => {
	const labels = goodsCategorySale.value.map((item) => item.name)
	const values = goodsCategorySale.value.map((item) => item.goodsCount)
	return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
	const labels = goodsCategoryFavor.value.map((item) => item.name)
	const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
	return { labels, values }
})
</script>

<style scoped lang="less">
.el-row {
	margin-bottom: 20px;
}
</style>

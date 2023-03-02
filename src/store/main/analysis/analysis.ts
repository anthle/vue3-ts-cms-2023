import { defineStore } from 'pinia'
import {
	getAmountListData,
	getCategoryGoodsCount,
	getCategoryGoodsSale,
	getCategoryFavor
} from '@/service/main/analysis/analysis'

interface IAnalysisState {
	amountList: any[]
	goodsCategoryCount: any[]
	goodsCategorySale: any[]
	goodsCategoryFavor: any[]
}
const useAnalysisStore = defineStore('analysis', {
	state: (): IAnalysisState => ({
		amountList: [],
		goodsCategoryCount: [],
		goodsCategorySale: [],
		goodsCategoryFavor: []
	}),
	actions: {
		async fetchAnalysisDataActions() {
			const amountRes = await getAmountListData()
			const goodsCategoryCountRes = await getCategoryGoodsCount()
			const goodsCategorySaleRes = await getCategoryGoodsSale()
			const goodsCategoryFavorRes = await getCategoryFavor()

			this.amountList = amountRes.data
			this.goodsCategoryCount = goodsCategoryCountRes.data
			this.goodsCategorySale = goodsCategorySaleRes.data
			this.goodsCategoryFavor = goodsCategoryFavorRes.data
		}
	}
})

export default useAnalysisStore

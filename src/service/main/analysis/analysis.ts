import jlRequest from '@/service'

enum AnalysisApi {
	amountList = '/goods/amount/list',
	categoryGoodsCount = '/goods/category/count',
	categoryGoodsSale = '/goods/category/sale',
	categoryFavor = '/goods/category/favor'
}

export function getAmountListData() {
	return jlRequest.get({
		url: AnalysisApi.amountList
	})
}

export function getCategoryGoodsCount() {
	return jlRequest.get({
		url: AnalysisApi.categoryGoodsCount
	})
}

export function getCategoryGoodsSale() {
	return jlRequest.get({
		url: AnalysisApi.categoryGoodsSale
	})
}

export function getCategoryFavor() {
	return jlRequest.get({
		url: AnalysisApi.categoryFavor
	})
}

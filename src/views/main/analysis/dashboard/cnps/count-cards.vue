<template>
	<div class="count-cards">
		<div class="header">
			<span>{{ title }}</span>
			<el-tooltip class="box-item" effect="dark" :content="tips" placement="top-start">
				<el-icon><Warning /></el-icon>
			</el-tooltip>
		</div>
		<div class="content" ref="count1Ref">{{ number1 }}</div>
		<div class="footer">
			<span>{{ subtitle }}</span>
			<span ref="count2Ref">{{ number2 }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { ref, onMounted } from 'vue'

interface IProps {
	title?: string
	tips?: string
	subtitle?: string
	number1?: number
	number2?: number
	amount?: string
}

// 设置props的默认值
const props = withDefaults(defineProps<IProps>(), {
	title: '商品总销量',
	tips: '所有商品的总销量',
	subtitle: '商品总销量',
	number1: 123,
	number2: 123
})

// 设置数字加载动画
const count1Ref = ref<HTMLElement | null>(null)
const count2Ref = ref<HTMLElement | null>(null)
const countOptions = {
	prefix: props.amount === 'saleroom' ? '¥' : ''
}
onMounted(() => {
	const counte1 = new CountUp(count1Ref.value as HTMLElement, props.number1, countOptions)
	const counte2 = new CountUp(count2Ref.value as HTMLElement, props.number2, countOptions)
	counte1.start()
	counte2.start()
})
</script>

<style lang="less" scoped>
.count-cards {
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	height: 130px;
	background: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	.header {
		display: flex;
		height: 38px;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.45);
		justify-content: space-between;
		align-items: flex-end;
	}

	.content {
		display: flex;
		margin-left: 0px;
		font-size: 26px;
		color: rgba(0, 0, 0, 0.85);
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.footer {
		display: flex;
		height: 38px;
		line-height: 38px;
		font-size: 14px;
		letter-spacing: 1px;
		color: rgba(0, 0, 0, 0.85);
		border-top: 1px solid #f0f0f0;
	}
}
</style>

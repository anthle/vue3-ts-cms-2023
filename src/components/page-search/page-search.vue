<template>
	<div class="department-search">
		<el-form label-width="80px" size="large" ref="formRef" :model="searchInfo">
			<el-row :gutter="20">
				<template v-for="item in searchConfig.formItem" :key="item.prop">
					<el-col :span="8">
						<el-form-item :label="item.lable" :prop="item.prop">
							<!-- <component :is="'el-' + item.type"></component> -->
							<template v-if="item.type === 'input'">
								<div style="width: 100%">
									<el-input v-model="searchInfo[item.prop]" :placeholder="item.placeholder"></el-input>
								</div>
							</template>
							<template v-if="item.type === 'date-picker'">
								<el-date-picker
									v-model="searchInfo[item.prop]"
									type="daterange"
									range-separator="-"
									start-placeholder="开始时间"
									end-placeholder="结束时间"
								/>
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
		<div class="btn">
			<el-button icon="Refresh" @click="handleResetClick">重置</el-button>
			<el-button icon="Search" type="primary" @click="handleSearchClick" v-if="isQuery">查询</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import usePermissions from '@/hooks/usePermissions'
interface Iprops {
	searchConfig: {
		formItem: any
		pageName: string
	}
}

const props = defineProps<Iprops>()

const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)

const initialForm: any = {}
for (const item of props.searchConfig.formItem) {
	initialForm[item.prop] = ''
}

const searchInfo = reactive(initialForm)

const emit = defineEmits(['searchInfo', 'resetInfo'])

const formRef = ref<any>()

function handleResetClick() {
	formRef.value?.resetFields()
	emit('resetInfo')
}

function handleSearchClick() {
	emit('searchInfo', searchInfo)
}
</script>

<style lang="less" scoped>
.department-search {
	background-color: #fff;
	padding: 20px;
	border-radius: 10px 10px 0 0;

	.el-form-item {
		margin-bottom: 0;
		padding: 20px;
	}

	.btn {
		text-align: right;
		padding: 0 50px 10px 0;

		.el-button {
			height: 32px;
		}
	}
}
</style>

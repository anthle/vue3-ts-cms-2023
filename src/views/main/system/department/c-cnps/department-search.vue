<template>
	<div class="department-search">
		<el-form label-width="80px" size="large" ref="formRef" :model="departmentInfo">
			<el-row :gutter="20">
				<el-col :span="8"
					><el-form-item label="部门名称" prop="name">
						<el-input placeholder="请输入部门名称" v-model="departmentInfo.name" /> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="部门领导" prop="leader">
						<el-input placeholder="请输入部门领导" v-model="departmentInfo.leader" /> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="创建时间" prop="createAt">
						<el-date-picker
							v-model="departmentInfo.createAt"
							type="daterange"
							range-separator="-"
							start-placeholder="开始时间"
							end-placeholder="结束时间"
						/> </el-form-item
				></el-col>
			</el-row>
		</el-form>
		<div class="btn">
			<el-button icon="Refresh" @click="handleResetClick">重置</el-button>
			<el-button icon="Search" type="primary" @click="handleSearchClick">查询</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

const departmentInfo = reactive({
	name: '',
	leader: '',
	createAt: ''
})

const emit = defineEmits(['searchInfo', 'resetInfo'])

const formRef = ref<any>()

function handleResetClick() {
	formRef.value?.resetFields()
	emit('resetInfo')
}

function handleSearchClick() {
	emit('searchInfo', departmentInfo)
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

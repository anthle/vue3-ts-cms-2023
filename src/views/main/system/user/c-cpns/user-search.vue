<template>
	<div class="user-search">
		<el-form label-width="80px" size="large" ref="formRef" :model="searchInfo">
			<el-row :gutter="20">
				<el-col :span="8"
					><el-form-item label="用户名" prop="name">
						<el-input placeholder="请输入要查询的用户名" v-model="searchInfo.name" /> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="真实姓名" prop="realName">
						<el-input placeholder="请输入要查询的真实姓名" v-model="searchInfo.realName" /> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="电话号码" prop="cellphone">
						<el-input placeholder="请输入要查询的电话号码" v-model="searchInfo.cellphone" /> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="状态" prop="enable">
						<el-select placeholder="请选择查询的状态" style="width: 100%" v-model="searchInfo.enable">
							<el-option label="启用" :value="1" />
							<el-option label="禁用" :value="2" />
						</el-select> </el-form-item
				></el-col>
				<el-col :span="8"
					><el-form-item label="创建时间" prop="createAt">
						<el-date-picker
							v-model="searchInfo.createAt"
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

const searchInfo = reactive({
	name: '',
	realName: '',
	cellphone: '',
	enable: 1,
	createAt: ''
})

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
.user-search {
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

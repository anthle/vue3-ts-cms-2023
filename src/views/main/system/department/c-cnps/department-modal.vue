<template>
	<div class="department-moda">
		<el-dialog
			v-model="dialogVisible"
			:title="isEditRef ? '编辑部门' : '新建部门'"
			width="30%"
			style="text-align: center; font-weight: 700"
		>
			<div class="form">
				<el-form ref="form" :model="formInfo" label-width="80px" size="large">
					<el-form-item label="部门名称">
						<el-input placeholder="请输入部门名称" v-model="formInfo.name"></el-input>
					</el-form-item>
					<el-form-item label="部门领导">
						<el-input placeholder="请输入部门领导" v-model="formInfo.leader"></el-input>
					</el-form-item>
					<el-form-item label="上级部门">
						<el-select v-model="formInfo.parentId" placeholder="" style="width: 100%">
							<template v-for="item in entierDepartments" :key="item.id">
								<el-option :label="item.name" :value="item.id"></el-option>
							</template>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">关闭</el-button>
					<el-button type="primary" @click="handleCreateDepartmentClick"> 提交 </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

const dialogVisible = ref(false)

const formInfo = reactive<any>({
	name: '',
	leader: '',
	parentId: ''
})

const isEditRef = ref(true)

// 从store获取角色和部门数据
const mainStore = useMainStore()

const { entierDepartments } = storeToRefs(mainStore)

const editData = ref()

function handleOpenDialog(isEdit: Boolean = false, departmentInfo?: any) {
	dialogVisible.value = true

	if (departmentInfo && isEdit) {
		isEditRef.value = true
		editData.value = departmentInfo
		for (const key in formInfo) {
			formInfo[key] = departmentInfo[key]
		}
	} else {
		isEditRef.value = false
		editData.value = null
		for (const key in formInfo) {
			formInfo[key] = ''
		}
	}
}

// 添加用户
const systemStore = useSystemStore()

function handleCreateDepartmentClick() {
	dialogVisible.value = false
	if (isEditRef.value && editData.value) {
		systemStore.editPageDataAction('department', editData.value.id, formInfo)
	} else {
		systemStore.createPageDataAction('department', formInfo)
	}
}

defineExpose({
	handleOpenDialog
})
</script>

<style lang="less" scoped>
.form {
	padding: 0 40px;
}
</style>

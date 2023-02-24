<template>
	<div class="department-moda">
		<el-dialog
			v-model="dialogVisible"
			:title="isEditRef ? props.modalConfig.header.editTitle : props.modalConfig.header.addTitle"
			width="30%"
			style="text-align: center; font-weight: 700"
		>
			<div class="form">
				<el-form ref="form" :model="formInfo" label-width="80px" size="large">
					<template v-for="item in modalConfig.formItems" :key="item.prop">
						<el-col :span="24">
							<el-form-item :label="item.label" :prop="item.prop">
								<template v-if="item.type === 'input'">
									<div style="width: 100%">
										<el-input v-model="formInfo[item.prop]" :placeholder="item.placeholder"></el-input>
									</div>
								</template>
								<template v-else-if="item.type === 'select'">
									<el-select v-model="formInfo[item.prop]" placeholder="" style="width: 100%">
										<template v-for="items in item.options" :key="items.id">
											<el-option :label="items.label" :value="items.value"></el-option>
										</template>
									</el-select>
								</template>
							</el-form-item>
						</el-col>
					</template>
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
import useSystemStore from '@/store/main/system/system'

interface IProp {
	modalConfig: {
		pageName: string
		header: {
			editTitle: string
			addTitle: string
		}
		formItems: any[]
	}
}

const props = defineProps<IProp>()

const dialogVisible = ref(false)

const initialForm: any = {}

for (const item of props.modalConfig.formItems) {
	initialForm[item.prop] = item.initialValue ?? ''
}

const formInfo = reactive<any>(initialForm)

const isEditRef = ref(true)

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
			const item = props.modalConfig.formItems.find((item) => item.prop === key)
			formInfo[key] = item ? item.initialValue : ''
		}
	}
}

// 添加用户
const systemStore = useSystemStore()

function handleCreateDepartmentClick() {
	dialogVisible.value = false
	if (isEditRef.value && editData.value) {
		systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, formInfo)
	} else {
		systemStore.createPageDataAction(props.modalConfig.pageName, formInfo)
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

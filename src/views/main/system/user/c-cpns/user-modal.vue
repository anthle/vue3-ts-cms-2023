<template>
	<div class="user-modal">
		<el-dialog
			v-model="dialogVisible"
			:title="isEditRef ? '编辑用户' : '新建用户'"
			width="30%"
			style="text-align: center; font-weight: 700"
		>
			<div class="form">
				<el-form ref="form" :model="formInfo" label-width="80px" size="large">
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formInfo.name"></el-input>
					</el-form-item>
					<el-form-item label="真实姓名">
						<el-input placeholder="请输入真实姓名" v-model="formInfo.realname"></el-input>
					</el-form-item>
					<el-form-item label="密码" v-if="!isEditRef">
						<el-input placeholder="请输入密码" v-model="formInfo.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="电话号码">
						<el-input placeholder="请输入电话号码" v-model="formInfo.cellphone"></el-input>
					</el-form-item>
					<el-form-item label="角色">
						<el-select v-model="formInfo.roleId" placeholder="" style="width: 100%">
							<template v-for="item in entierRoles" :key="item.id">
								<el-option :label="item.name" :value="item.id"></el-option>
							</template>
						</el-select>
					</el-form-item>
					<el-form-item label="部门">
						<el-select v-model="formInfo.departmentId" placeholder="" style="width: 100%">
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
					<el-button type="primary" @click="handleCreateUserClick"> 提交 </el-button>
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
	realname: '',
	password: '',
	cellphone: '',
	roleId: '',
	departmentId: ''
})

const isEditRef = ref(true)

// 从store获取角色和部门数据
const mainStore = useMainStore()

const { entierRoles, entierDepartments } = storeToRefs(mainStore)

const editData = ref()

function handleOpenDialog(isEdit: Boolean = false, userInfo?: any) {
	dialogVisible.value = true

	if (userInfo && isEdit) {
		isEditRef.value = true
		editData.value = userInfo
		for (const key in formInfo) {
			formInfo[key] = userInfo[key]
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

function handleCreateUserClick() {
	dialogVisible.value = false
	if (isEditRef.value && editData.value) {
		systemStore.editUserDataAction(editData.value.id, formInfo)
	} else {
		systemStore.createUserDataAction(formInfo)
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

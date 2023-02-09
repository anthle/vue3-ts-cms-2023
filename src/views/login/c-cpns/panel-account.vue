<template>
	<div class="panel-account">
		<el-form label-width="60" :model="account" :rules="ruleForm" ref="elformRef">
			<el-form-item label="帐号" prop="name">
				<el-input v-model="account.name" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input show-password type="password" v-model="account.password" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const account = reactive<IAccount>({
	name: localCache.getCache('name') ?? '',
	password: localCache.getCache('password') ?? ''
})
const ruleForm = reactive<FormRules>({
	name: [
		{ required: true, message: '必须输入帐号信息~', trigger: 'blur' },
		{ pattern: /^[a-zA-Z0-9]{4,10}$/, message: '必须是4-10位', trigger: 'blur' }
	],
	password: [
		{ required: true, message: '必须输入密码~', trigger: 'blur' },
		{ pattern: /^[a-zA-Z0-9]{4,10}$/, message: '必须是3-10位数字或者字母组成~', trigger: 'blur' }
	]
})
// 登录的逻辑
const elformRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAccount(isRememberPwd: any) {
	elformRef.value?.validate((valid) => {
		if (valid) {
			console.log('验证通过~')
			const name = account.name
			const password = account.password
			loginStore.loginAccountAction({ name, password })
			console.log(isRememberPwd)

			if (isRememberPwd) {
				localCache.setCache('name', name)
				localCache.setCache('password', password)
			} else {
				localCache.removeCache('name')
				localCache.removeCache('password')
			}
		} else {
			ElMessage.error('Oops, this is a error message.')
		}
	})
}

defineExpose({
	loginAccount
})
</script>

<style lang="less" scoped>
.panel-account {
	color: #000;
}
</style>

<template>
	<div class="login-panel">
		<div class="title">
			<h2>后台管理系统</h2>
		</div>
		<div>
			<el-tabs type="border-card" stretch v-model="activName">
				<!-- 账号登陆 -->
				<el-tab-pane label="账号登录" name="account">
					<template #label>
						<div class="label">
							<el-icon><UserFilled /></el-icon>
							<span>帐号登录</span>
						</div>
					</template>
					<PanelAccount ref="accountRef"></PanelAccount>
				</el-tab-pane>
				<!-- 手机号码登录 -->
				<el-tab-pane label="手机登陆" name="phone">
					<template #label>
						<div class="label">
							<el-icon><Iphone /></el-icon>
							<span>手机登录</span>
						</div>
					</template>
					<PanelPhone></PanelPhone>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="controls">
			<span>
				<el-checkbox v-model="isRememberPwd" label="记住密码" size="large" />
			</span>
			<span>
				<el-link type="primary">忘记密码</el-link>
			</span>
		</div>
		<div class="login-btn">
			<el-button class="login-btn" type="primary" size="large" @click="loginClickHandle">立即登录</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const activName = ref('account')
const isRememberPwd = ref<boolean>(localCache.getCache('isRememberPwd') ?? false)
watch(isRememberPwd, (newValue) => {
	localCache.setCache('isRememberPwd', newValue)
})
const accountRef = ref<InstanceType<typeof PanelAccount>>()

function loginClickHandle() {
	accountRef.value?.loginAccount(isRememberPwd.value)
}
</script>

<style lang="less" scoped>
.login-panel {
	width: 330px;

	.label {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.text {
		margin-left: 5px;
	}
	.title {
		text-align: center;
		margin-bottom: 15px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 12px;
	}
	.login-btn {
		width: 100%;
		margin-top: 10px;
		--el-button-size: 40px;
	}
}
</style>

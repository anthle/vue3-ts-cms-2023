<template>
	<div class="panel-phone">
		<el-form label-width="60">
			<el-form-item label="手机号">
				<el-input />
			</el-form-item>
			<el-form-item label="验证码">
				<div class="verify-code">
					<el-input />
					<el-button class="get-btn" type="primary">获取验证码</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.panel-phone {
	color: #000;

	.verify-code {
		display: flex;

		.get-btn {
			width: 120px;
			margin-left: 10px;
		}
	}
}
</style>

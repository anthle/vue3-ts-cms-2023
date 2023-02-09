<template>
	<div class="login">
		<login-panel></login-panel>
	</div>
</template>

<script lang="ts" setup>
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
	width: 100%;
	height: 100%;
	background: url('../../assets/images/login-bg.svg');

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<template>
	<div class="main">
		<h2>main</h2>
		<button @click="onExitClick">退出登录</button>
	</div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

function onExitClick() {
	localCache.removeCache(LOGIN_TOKEN)
	router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
	color: #000;
}
</style>

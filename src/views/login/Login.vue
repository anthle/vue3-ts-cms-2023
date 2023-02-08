<template>
	<div class="login"></div>
</template>

<script lang="ts" setup>
import hyRequest from '@/serieve'

hyRequest
	.get({
		url: '/home/multidata'
	})
	.then((res) => {
		console.log(res)
	})
</script>

<style lang="less" scoped>
.login {
	color: #000;
}
</style>

<template>
	<div class="main-menus">
		<div class="logo">
			<img class="img" src="@/assets/images/logo-with-shadow.png" alt="" />
			<span class="title" :style="!isFold ? 'opacity:1' : 'opacity:0'">vue3-ts-cms-2023</span>
		</div>

		<el-menu
			text-color="#b7bdc3"
			active-text-color="#fff"
			background-color="#001529"
			:default-active="defalutActive"
			:collapse="isFold"
		>
			<template v-for="item in userMenus" :key="item.id">
				<el-sub-menu :index="item.id + ''">
					<template #title>
						<el-icon>
							<component :is="item.icon.split('-icon-')[1]"></component>
						</el-icon>
						<span>{{ item.name }}</span>
					</template>
					<el-menu-item
						v-for="child in item.children"
						:key="child.id"
						:index="child.id + ''"
						@click="menuItemClick(child)"
					>
						{{ child.name }}
					</el-menu-item>
				</el-sub-menu>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import router from '@/router'
import { localCache } from '@/utils/cache'
import { useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'

defineProps({
	isFold: {
		type: Boolean,
		default: false
	}
})

const userMenus = localCache.getCache('userMenus')

// 根据当前页面的menu获取defalutActive 刷新不丢失
const route = useRoute()

const defalutActive = computed(() => {
	const pathmenu = mapPathToMenu(route.path, userMenus)
	return pathmenu.id + ''
})

function menuItemClick(child: any) {
	router.push(child.url)
}
</script>

<style lang="less" scoped>
.main-menus {
	height: 100%;
	background-color: #001529;
	.logo {
		height: 40px;
		display: flex;
		align-items: center;
		padding: 10px 11px;
		height: 28px;
		overflow: hidden;
		.img {
			margin: 0 10px;
			height: 100%;
		}
		.title {
			font-size: 18px;
			font-weight: 700;
			color: white;
			white-space: nowrap;
			visibility: visible;
			transition: opacity 0.5s ease-in;
		}
	}

	.el-menu {
		border-right: none;
		user-select: none;
	}
	.el-sub-menu {
		.el-menu-item {
			padding-left: 50px;
			background-color: #0c2135;
		}

		.el-menu-item:hover {
			color: #fff;
		}
		.el-menu-item.is-active {
			background-color: #0a60bd;
			font-weight: 700;
		}
	}
}
</style>

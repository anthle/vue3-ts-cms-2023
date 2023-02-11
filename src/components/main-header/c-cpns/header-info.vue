<template>
	<div class="header-info">
		<div class="operation">
			<span>
				<el-icon><Message /></el-icon>
			</span>
			<span>
				<el-icon><Search /></el-icon>
			</span>
			<span>
				<div class="dot"></div>
				<el-icon><Bell /></el-icon>
			</span>
		</div>
		<div class="info">
			<el-dropdown>
				<span class="userInfo">
					<el-avatar
						:size="30"
						src="https://img1.baidu.com/it/u=2318606664,1603016411&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
					/>
					<span class="name">Messier64</span>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>
							<el-icon><InfoFilled /></el-icon>
							<span>个人信息</span>
						</el-dropdown-item>
						<el-dropdown-item divided>
							<el-icon><Unlock /></el-icon>
							<span>修改密码</span>
						</el-dropdown-item>
						<el-dropdown-item divided @click="handleExitClick">
							<el-icon><CircleClose /></el-icon>
							<span>退出系统</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const Router = useRouter()
function handleExitClick() {
	localCache.removeCache(LOGIN_TOKEN)
	localCache.removeCache('userMenus')
	Router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
	display: flex;
	align-items: center;

	.operation {
		display: flex;
		margin-right: 20px;
		display: inline-flex;

		span {
			position: relative;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 35px;

			&:hover {
				background-color: #f2f2f2;
			}

			i {
				font-size: 18px;
			}

			.dot {
				position: absolute;
				top: 3px;
				right: 3px;
				z-index: 10;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: #f5222d;
			}
		}
	}
}
.info {
	.userInfo {
		display: flex;
		align-items: center;

		.name {
			margin-left: 10px;
		}
	}

	:global(.el-dropdown-menu__item) {
		line-height: 36px;
		padding: 6px 22px;
		font-weight: 600;
	}
}
</style>

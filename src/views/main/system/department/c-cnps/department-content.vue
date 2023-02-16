<template>
	<div class="user-content">
		<div class="header">
			<h3 class="title">部门列表</h3>
			<div class="btn"><el-button type="primary" @click="createNewDepartmentClick">新建部门</el-button></div>
		</div>
		<div class="table">
			<el-table :data="pageList" border style="width: 100%">
				<el-table-column type="selection" width="50px" align="center" />
				<el-table-column type="index" label="序号" width="60px" align="center" />
				<el-table-column prop="name" label="部门名称" width="120px" align="center" />
				<el-table-column prop="leader" label="部门领导" width="120px" align="center" />
				<el-table-column prop="parentId" label="上级部门" width="150px" align="center" />
				<el-table-column prop="createAt" label="创建时间" align="center">
					<template #default="{ row }">
						{{ formatUTC(row.createAt) }}
					</template>
				</el-table-column>
				<el-table-column prop="updateAt" label="更新时间" align="center">
					<template #default="{ row }">
						{{ formatUTC(row.updateAt) }}
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180px" align="center">
					<template #default="{ row }">
						<el-button size="small" type="primary" icon="Edit" @click="handleEditDeparmentInfo(row)">编辑</el-button>
						<el-button size="small" type="danger" icon="Delete" @click="deleteDepartmentClick(row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="pagination">
			<div class="demo-pagination-block">
				<el-pagination
					v-model:current-page="currentPage"
					v-model:page-size="pageSize"
					:page-sizes="[10, 20, 30]"
					layout="total, sizes, prev, pager, next, jumper"
					:total="pageRTotalCount"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import usesystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

const systemStore = usesystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageListData()

const { pageList, pageRTotalCount } = storeToRefs(systemStore)

function fetchPageListData(formData: any = {}) {
	const size = pageSize.value
	const offset = (currentPage.value - 1) * pageSize.value
	let info = { size, offset, ...formData }

	systemStore.postPageListDataAction('department', info)
}

function handleSizeChange() {
	fetchPageListData()
}

function handleCurrentChange() {
	fetchPageListData()
}

defineExpose({
	fetchPageListData
})

// 编辑/删除用户
function handleEditDeparmentInfo(row: any) {
	emit('editDepartmentInfoClick', row)
}

function deleteDepartmentClick(id: number) {
	systemStore.deletePageAction('department', id)
}

// 新建用户
const emit = defineEmits(['createNewDepartmentClick', 'editDepartmentInfoClick'])

function createNewDepartmentClick() {
	emit('createNewDepartmentClick')
}
</script>

<style lang="less" scoped>
.user-content {
	margin-top: 20px;
	background-color: #fff;

	.header {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		align-items: flex-end;

		.title {
			font-size: 22px;
		}

		.btn {
			margin-right: 0;
		}
	}

	.table {
		padding: 0 20px 20px 20px;
		:deep(.el-table__cell) {
			padding: 12px 0;
		}
	}
}
.pagination {
	display: flex;
	justify-content: flex-end;
	padding: 0 20px 20px 20px;
}
</style>

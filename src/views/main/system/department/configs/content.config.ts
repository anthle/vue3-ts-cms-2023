const contentConfig = {
	pageName: 'department',
	header: {
		title: '部门列表',
		btnTitle: '新建部门'
	},
	propsList: [
		{
			type: 'selection',
			width: '50px'
		},
		{
			type: 'index',
			label: '序号',
			width: '60px'
		},
		{
			type: 'normal',
			prop: 'name',
			label: '部门名称',
			width: '120px'
		},
		{
			type: 'normal',
			prop: 'leader',
			label: '部门领导',
			width: '120px'
		},
		{
			type: 'normal',
			prop: 'parentId',
			label: '上级部门',
			width: '150px'
		},
		{
			type: 'normal',
			prop: 'name',
			label: '部门名称',
			width: '200px'
		},
		{
			type: 'slot',
			prop: 'name',
			label: '部门名称123',
			width: '200px',
			slotName: 'name'
		},
		{
			type: 'time',
			label: '创建时间',
			prop: 'createAt'
		},
		{
			type: 'time',
			label: '更新时间',
			prop: 'updateAt'
		},
		{
			type: 'operation',
			label: '操作',
			width: '180px'
		}
	]
}

export default contentConfig

const modalConfig = {
	pageName: 'department',
	header: {
		editTitle: '编辑部门',
		addTitle: '新增部门'
	},
	formItems: [
		{
			type: 'input',
			label: '部门名称',
			placeholder: '请输入部门名称',
			prop: 'name'
		},
		{
			type: 'input',
			label: '部门领导',
			placeholder: '请输入部门领导',
			prop: 'leader'
		},
		{
			type: 'select',
			label: '上级部门',
			placeholder: '请选择上级部门',
			prop: 'parentId',
			options: [] as any[]
		}
	]
}

export default modalConfig

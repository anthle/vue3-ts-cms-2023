const searchConfig = {
	formItem: [
		{
			type: 'input',
			lable: '角色名称',
			prop: 'roleName',
			placeholder: '请输入角色名称'
		},
		{
			type: 'input',
			lable: '权限介绍',
			prop: 'leader',
			placeholder: '请输入查询的权限介绍'
		},
		{
			type: 'date-picker',
			lable: '创建时间',
			prop: 'createAt'
		}
	]
}

export default searchConfig

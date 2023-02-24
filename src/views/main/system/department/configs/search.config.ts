const searchConfig = {
	formItem: [
		{
			type: 'input',
			lable: '部门名称',
			placeholder: '请输入部门名称',
			prop: 'name'
		},
		{
			type: 'input',
			lable: '部门领导',
			placeholder: '请输入部门领导',
			prop: 'leader'
		},
		{
			type: 'date-picker',
			lable: '创建时间',
			prop: 'createAt'
		}
	]
}

export default searchConfig

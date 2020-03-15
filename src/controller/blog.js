const getList = (author,keyWorf) => {
	//先返回假数据（格式是正确的）
	return [
		{
			id: 1,
			title: '标题A',
			content: '内容A',
			createTime: 1546610491112,
			author: 'zhangsan'
		},
		{
			id: 2,
			title: '标题B',
			content: '内容B',
			createTime: 1584274573926,
			author: 'lisi'
		}
	]
}

module.exports = {
	getList
}
const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
	const method = req.method //GET POST
	
	//获取博客列表
	if(method === 'GET' && req.path === '/api/blog/list') {
		const author = req.query.author || ''
		const keyword = req.query.keyword || ''
		const listData = getList(author, keyword)

		return new SuccessModel(listData)
	}

	//获取博客详情
	if(method === 'GET' && req.path === '/api/blog/detail') {
		return {
			meg:'这是获取博客详情的接口'
		}
	}

	//新建一篇博客
	if(method === 'POST' && req.path === '/api/blog/new') {
		return {
			meg:'这是新建博客的接口'
		}
	}

	//更新一篇博客
	if(method === 'POST' && req.path === '/api/blog/update') {
		return {
			meg:'这是更新一篇博客接口'
		}
	}

	//删除一篇博客
	if(method === 'POST' && req.path === '/api/blog/del') {
		return {
			meg:'这是删除博客接口'
		}
	}
}

module.exports = handleBlogRouter
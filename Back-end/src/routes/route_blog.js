var express =require('express');
var router = express.Router();
var api_blog = require('../api/api_blog');

router.post('/blog/publish', function (req, res, next){
	var date = new Date();
	var time = {
		date: date,
		year: date.getFullYear(),
		month: date.getFullYear() + "-" + (date.getMonth() + 1),
		day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
		minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
	};
	var blog = {
		author: req.body.author,
		title: req.body.title,
		tags: [...req.body.tags],
		content: req.body.content,
		comments: [],
		time: time
	};
	
	api_blog.createBlog(blog)
	.then( (result) => {
		if(result && result._id){
			res.send({
				code: 200,
				message: '发表成功'
			});
		}else{
			throw new Error('发表失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '发表失败',
      		error: err.toString()
		});
	})
});

router.get('/blog/detail/:id', function (req, res, next){
	api_blog.getOneBlogById(req.params.id)
	.then( (result) => {
		if(result && result._id){
			res.send({
				code: 200,
				message: '查找文章成功',
				blog: result
			});
		}else{
			throw new Error('查找文章失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '查找文章失败',
      		error: err.toString()
		});
	})
});

router.get('/blog/home/:page', function (req, res, next){
	api_blog.getTenBlogs(req.params.page)
	.then( (result) => {
		if(result && result.length > 0){
			res.send({
				code:200,
				message:'获得blogList成功',
				blogList: result
			});
		}else{
			throw new Error('获得blogList失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '获得blogList失败',
      		error: err.toString()
		});
	})
});

router.get('/tag/blogsList/:tag/:page', function (req, res, next){
	api_blog.getTenBlogsByTag(req.params.page, req.params.tag)
	.then( (result) => {
		if(result && result.length > 0){
			res.send({
				code:200,
				message:'根据tag获得blogList成功',
				blogList: result
			});
		}else{
			throw new Error('根据tag获得blogList失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '根据tag获得blogList失败',
      		error: err.toString()
		});
	})
});

router.get('/tag/tagList', function (req, res, next){
	api_blog.getTags()
	.then( (result) => {
		if(result && result.length > 0){
			res.send({
				code:200,
				message:'获得tagsList成功',
				tagList: result
			});
		}else{
			throw new Error('获得tagsList失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '获得tagsList失败',
      		error: err.toString()
		});
	})
});

router.post('/blog/update', function (req, res, next){
	api_blog.updateBlog(req.body.id, req.body.content)
	.then( (result) => {
		console.log(result);    //result : { n: 1, nModified: 1, ok: 1 }
		var {ok, nModified, n} = result;
		if(ok>0 && n>0 && nModified>0){
			res.send({
				code: 200,
				message: '更新成功'
			});
		}else{
			throw new Error('更新失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '更新失败',
      		error: err.toString()
		});
	})
});

router.post('/blog/comment', function (req, res, next){
	var date = new Date();
	var comment = {
		name: req.body.name,
		email: req.body.email,
		minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
		message: req.body.message
	};
	api_blog.addComment(req.body.id, comment)
	.then( (result) => {
		var {ok, nModified, n} = result;
		if(ok>0 && n>0 && nModified>0){
			res.send({
				code: 200,
				message: '发表成功'
			});
		}else{
			throw new Error('发表失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '发表失败',
      		error: err.toString()
		});
	})
});

router.post('/blog/delete', function (req, res, next){
	api_blog.deleteBlog(req.body.id)
	.then( ({result:{n, ok}}) => {
		if(ok>0 && n>0){
			res.send({
				code: 200,
				message: '删除成功'
			});
		}else{
			throw new Error('删除失败');
		}
  	})
    .catch( err => {
		res.send({
			code: -200,
			message: '删除失败',
      		error: err.toString()
		});
	})
});

module.exports = router;                             

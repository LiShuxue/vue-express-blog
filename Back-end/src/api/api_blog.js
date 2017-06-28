//[conditions] <Object>  查询条件   
//[projection] <Object> 返回的字段
//[options] <Object> 可选的配置
//[callback] <Function> 回调函数
/*
    $or　　　　或关系
    $nor　　　　或关系取反
    $gt　　　　大于
    $gte　　　　大于等于
    $lt　　　　小于
    $lte　　　　小于等于
    $ne　　　　不等于
    $in　　　　在多个值范围内
    $nin　　　　不在多个值范围内
    $all　　　　匹配数组中多个值
    $regex　　　　正则，用于模糊查询
    $size　　　　匹配数组大小
    $maxDistance　　　　范围查询，距离（基于LBS）
    $mod　　　　取模运算
    $near　　　　邻域查询，查询附近的位置（基于LBS）
    $exists　　　　字段是否存在
    $elemMatch　　　　匹配内数组内的元素
    $within　　　　范围查询（基于LBS）
    $box　　　　范围查询，矩形范围（基于LBS）
    $center　　　　范围醒询，圆形范围（基于LBS）
    $centerSphere　　　　范围查询，球形范围（基于LBS）
    $slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素
*/

var Blog = require('../models/blog');

var createBlog = function (blog) {
    return Blog.create(blog);
}

//Model.findOne([conditions], [projection], [options], [callback])
//select only the adventures 'name' and 'length'
//Adventure.findOne({ type: 'iphone' }, 'name length').exec(function (err, adventure) {});
var getOneBlogByTitle = function (title) {
    return Blog.findOne({
        title: title
    }).exec();
}

//Model.findById(id, [projection], [options], [callback])
//include all properties except for `length`
//Adventure.findById(id, '-length').exec(function (err, adventure) {});
var getOneBlogById = function (id) {
    return Blog.findById({
        _id: id
    }).exec();
}

//Model.find(conditions, [projection], [options], [callback])
// named john and at least 18
//MyModel.find({ name: 'john', age: { $gte: 18 }}).exec(function (err, adventure) {});
var getAllBlogs = function () {
    return Blog.find().exec();
}

var getBlogsByTag = function (tag) {
    return Blog.find({
        'tags': tag
    }).exec();
}

//通过.skip() .limit()方法实现分页。前台拿到的page默认是从1开始的，所以计算Skip的参数为start = (page-1)*pageSize（每页的数量）
//Model.find(conditions, [projection], [options], [callback]).skip(start).limit(pageSize).exec(function (err, doc) 
var getTenBlogs = function (page) {
    var start = (page - 1) * 10;
    return Blog.find().skip(start).limit(10).exec();
}

var getTenBlogsByTag = function (page, tag) {
    var start = (page - 1) * 10;
    return Blog.find({
        'tags': tag
    }).skip(start).limit(10).exec();
}

var getTenBlogsByAuthor = function (page, author) {
    var start = (page - 1) * 10;
    return Blog.find({
        'author': author
    }).skip(start).limit(10).exec();
}

//Model.distinct(field, [conditions], [callback])
var getTags = function () {
    return Blog.distinct('tags').exec();
}

//Model.update(conditions, doc, [options], [callback])
//Comment.update({ _id: id }, { $set: { text: 'changed' }}).exec();
var updateBlog = function (id, content) {
    return Blog.update({
        _id: id
    }, {
        $set: {
            content: content
        }
    }).exec();
}

var addComment = function (id, comment) {
    return Blog.update({
        _id: id
    }, {
        $push: {
            comments: comment
        }
    }).exec();
}

//Model.remove(conditions, [callback])
//Character.remove({ name: 'Eddard Stark' }).exec();
var deleteBlog = function (id) {
    return Blog.remove({
        _id: id
    }).exec();
}

module.exports = {
    createBlog,
    getOneBlogByTitle,
    getOneBlogById,
    getAllBlogs,
    getBlogsByTag,
    getTenBlogs,
    getTenBlogsByTag,
    getTenBlogsByAuthor,
    getTags,
    updateBlog,
    addComment,
    deleteBlog
}

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    author: String,
    title: String,
    tags: [],
    content: String,
    comments: [Schema.Types.Mixed],
    time: Schema.Types.Mixed
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;

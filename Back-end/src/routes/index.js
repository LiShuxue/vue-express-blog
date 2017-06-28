module.exports = function (app) {
    app.use('/api', require('./route_user'));
    app.use('/api', require('./route_blog'));
}

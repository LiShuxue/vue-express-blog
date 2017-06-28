var User = require('../models/user');

var createUser = function (user) {
    return User.create(user);
}

var getUser = function (username, password) {
    return User.findOne({
        username,
        password
    }, '-password').exec();
}

module.exports = {
    createUser,
    getUser
}

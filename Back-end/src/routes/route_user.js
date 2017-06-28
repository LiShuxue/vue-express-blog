var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var api_user = require('../api/api_user');

router.post('/user/login', function (req, res, next) {
    api_user.getUser(req.body.username, req.body.password)
        .then((result) => {
            if (result && result._id) {
                res.send({
                    code: 200,
                    message: '登录成功',
                    user: result
                });
            } else {
                throw new Error('登录失败');
            }
        })
        .catch(err => {
            res.send({
                code: -200,
                message: '登录失败',
                error: err.toString()
            });
        })
});

router.post('/user/register', function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password
    }

    api_user.createUser(user)
        .then((result) => {
            if (result && result._id) {
                res.send({
                    code: 200,
                    message: '注册成功'
                });
            } else {
                throw new Error('注册失败');
            }
        })
        .catch(err => {
            res.send({
                code: -200,
                message: '注册失败',
                error: err.toString()
            });
        })
});

module.exports = router;

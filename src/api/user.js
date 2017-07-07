var dbConnection = require('../db/index')
var log = require('../util/log')
var resDataUtil = require('../util/resDataUtil')
/**
 * 登录
 * @param {*} req 
 * @param {*} res 
 */
const loginIn = (req, res) => {
    var param = req.query;
    if (param.userName && param.password) {
        var sql = "select * from simplebase.user where username='" + param.userName + "'"
        dbConnection.mysqlDB.execQuery(sql, (result) => {
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    if (param.userName == result[i].username && param.password == result[i].password) {
                        var user = {
                            username: param.userName,
                            password: param.password
                        };
                        req.session.user = user;
                        log.info("登录IP:" + req._remoteAddress + " 登陆成功!")
                        res.end(resDataUtil.success({
                            userName: param.userName
                        }));
                    } else {
                        log.warn("登录IP:" + req._remoteAddress + "用户名或密码错误!")
                        res.end(resDataUtil.error([], ' 用户名或密码错误!'));
                    }
                }
            } else {
                log.warn("登录IP:" + req._remoteAddress + " 用户名不存在!")
                res.end(resDataUtil.error([], '用户名不存在!'));
            }
        })
    } else {
        log.warn("登录IP:" + req._remoteAddress + " 参数错误!")
        res.end(resDataUtil.error([], '参数错误!'));
    }
}

/**
 * 登出
 * @param {*} req 
 * @param {*} res 
 */
const loginOut = (req, res) => {
    // req.session.user = null;
    res.end(resDataUtil.success("success"));
}

module.exports = {
    loginIn,
    loginOut
}
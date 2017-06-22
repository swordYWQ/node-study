var api = require('../api/index')
var route = function (app) {
    app.get('/user/login', api.user.loginIn);
    app.get('/user/loginOut', api.user.loginOut);
    // app.get('*', function (req, res) {
    //     res.end(404);
    // });
};
module.exports = route;
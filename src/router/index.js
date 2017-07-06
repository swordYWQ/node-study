var api = require('../api/index')
var route = (app) => {
    app.get('/user/login', api.user.loginIn);
    app.get('/user/loginout', api.user.loginOut);
    // app.get('*', function (req, res) {
    //     res.end(404);
    // });
};
module.exports = route;
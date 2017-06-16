var api = require('../api/index')
var route = function (app) {
    app.get('/login', api.user.loginIn);

    // app.get('*', function (req, res) {
    //     res.end(404);
    // });
};
module.exports = route;
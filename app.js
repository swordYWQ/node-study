var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./src/router/index');

var app = express();
app.set('port', 8888);

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
routes(app)

var server = require('http').createServer(app)
var ip = '0.0.0.0';
var port = app.get('port')
server.listen(port, ip, function () {
    console.log(ip + ',Express server listening on port ' + port);
});

global.app = app;
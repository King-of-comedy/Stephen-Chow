/**
 * Created by Ma Ming on 2017/1/20.
 */
var jsonServer = require('json-server');
var path = require('path');
var server = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, 'mock/db.json'));
var middlewares = jsonServer.defaults();
var routes = require('./mock/routes.json');

server.use(middlewares);
// Add custom routes before JSON Server router
server.get('/echo', function (req, res) {
    res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use(function (req, res, next) {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});
// 重写router规则
server.use(jsonServer.rewriter(routes));

// Use default router
server.use(router);
server.listen(9527, function () {
    console.log('JSON Server is running');
});
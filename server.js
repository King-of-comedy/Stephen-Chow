/**
 * Created by Ma Ming on 2017/1/20.
 */
var express = require('express'),
    app = express(),
    port = 9527;

// 配置路由
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// 生成server
app.listen(port, function () {
    console.log('Example app listening at localhost:'+ port);
});
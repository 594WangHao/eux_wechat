var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var logger = require('koa-logger');
var render = require('koa-ejs');
var bodyParser = require('koa-bodyparser');
var session = require('koa-session');

var config = require('./config/config.js');
var routers = require('./config/routers.js');

/*ejs模板引擎*/
render(app, {
    root: './app/view',
    layout: false,
    viewExt: 'html',
    cache: true,
    debug: true
});


/*加载中间件*/
app.use(bodyParser());      /*请求体解析*/
app.use(session(app));      /*session*/
app.use(logger());          /*日志*/
app.use(require('koa-static')(__dirname + '/public/dist'));         /*静态文件，为了不让访问到src目录所以设置为/public/dist*/


/*路由配置*/
routers.forEach(function(item) {
    router.use(item.url, require('./app/router/' + item.dir + '/entry.js').routes());
})

app.use(router.routes())

/*这个错误处理总是报错。。。
app.on('error', function(err, ctx) {
    logger.error('server error', err, ctx);
});*/

// app.use(logger());

app.listen(3000)
    .on('listening', function() {
        console.log('服务器启动：' + this.address().port);
    });

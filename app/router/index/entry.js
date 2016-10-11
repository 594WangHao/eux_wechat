var router = require('koa-router')();


router.get('/', function* (next) {
    yield this.render('index', {
        title: 'hello world'
    })
})

module.exports = router;

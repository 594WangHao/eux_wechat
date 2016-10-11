var router = require('koa-router')();
var wechat = require('../../common/wechat.js');

var config = require('../../../config/config.js');

var wechatText = require('./wechatText.js');
var wechatEvent = require('./wechatEvent.js')

router.get('/',wechat(config.wechat).middleware())

router.post('/', wechat(config.wechat).middleware(function*(next) {
    var message = this.weixin;
    var self = this;
    switch (message.MsgType) {
        case 'text':
            wechatText.call(this);
            break;
        case 'event':
            wechatEvent.call(this);
            break;
        default:
            this.body = '还木有开发完...';
    }

}));


module.exports = router;

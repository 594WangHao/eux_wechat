var wechatClick = require('./wechatClick.js')

module.exports = function() {
    var message = this.weixin;
    switch (message.Event) {
        case 'click':
            wechatClick.call(this);
            break;
    }
}

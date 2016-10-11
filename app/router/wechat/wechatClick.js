module.exports = function() {
    var message = this.weixin;

    switch (message.EventKey) {
        case 'eeyesWifi':
            this.body = 'jingcaiyouetong/\nmeimiaowuyitong';
            break;
        default:
            this.body = '还木有开发完...';
    }
}

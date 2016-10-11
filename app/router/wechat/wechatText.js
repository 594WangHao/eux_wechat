module.exports = function() {
    var message = this.weixin;
    switch (message.Content) {
        case 'eux':
            this.body = [{
                title: 'eux',
                description: '欢迎访问eux',
                picurl: 'http://eux.eeyes.net/dist/img/index/t.png',
                url: 'http://eux.eeyes.net/'
            }];
            break;
        default:
            this.body = '还木有开发完...';
    }
}

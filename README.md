#eux_wechat

西安交通大学EUX前端视觉中心微信项目。提供校内的教务、信息服务，内部员工的信息查询等功能

欢迎访问: [http://eux.eeyes.net](http://eux.eeyes.net)

##目录结构
```
├─app                       // 后台程序
│  ├─common                 // 通用模块：localstorage封装、wechat中间件等
│  ├─model                  // 模型
│  ├─router                 // 路由处理
│  └─view                   // 视图模板
├─config                    // 配置文件：路由配置、对接token等
└─public                    // 静态资源
    ├─dist                  // 压缩后生成
    └─src                   // 开发目录
        ├─img
        ├─js
        │  ├─build          // webpack打包生成
        │  ├─common         // 通用工具
        │  ├─entry          // webpack入口文件
        │  └─lib            // 引用到的js库
        └─less              // less文件，weui基于less开发，故采用less
```
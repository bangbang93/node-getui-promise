# getui-promise
这是个针对官方Node.JS的简单封装，vanilla目录是官方sdk的原版目录

所以具体文档请参考<http://docs.getui.com/server/nodejs/start/>

然后把所有callback语法的函数都转换为promise语法

非callback的同步函数，还是同步返回

## Usage
```js
const Getui = require('getui-promise');
const ms = require('ms');
const GetuiConfig = {
  "appId": "foo",
  "appKey": "bar",
  "appSecret": "baz",
  "masterSecret": "wow",
  "host": "https://api.getui.com/apiex.htm"
}

const getui = new Getui.GeTui(GetuiConfig.host, GetuiConfig.appKey, GetuiConfig.masterSecret);

const template = new Getui.NotificationTemplate({
  appId: GetuiConfig.appId,
  appKey: GetuiConfig.appKey,
  title: 'aaaa',
  text: 'emmmmmmmm'
});

const message = new Getui.SingleMessage({
  isOffline: true,
  offlineExpireTime: ms('7d'),
  data: template
});

const target = new Getui.Target({
  appId: GetuiConfig.appId,
  clientId: 'lalalalala'
});

getui.pushMessageToSingle(message, target)
  .then(console.log)
  .catch(console.error);
```

## Promise
默认使用node内置Promise(global.Promise)

可以通过
```js
const Getui = require('getui-promise');
Getui.Promise = require('bluebird');
```

进行指定
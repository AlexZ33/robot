简单的搜索脚本
-------

安装 [nightmare](https://github.com/segmentio/nightmare)
安装 [babel-register](http://babeljs.io/docs/setup/#installation)
安装 [babel-polyfill](http://babeljs.io/docs/usage/polyfill/)

```
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const run = async () => {
  nightmare.goto('http://www.baidu.com')
}
```

这里的goto是异步执行的，会返回一个promise
前面加个await 使它以同步的方式执行

index.js
--------

```
require('babel-register');
require('babel-polyfill');
require('./run')
```

## run.js ##
```


const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const run = async () => {
  await nightmare.goto('http://www.baidu.com')
  await nightmare.type('#kw','海贼王')
  await nightmare.click("#su")
}


run()
```


![图片描述](http://on891bjlf.bkt.clouddn.com/hexo/GIF.gif)


![图片描述](http://on891bjlf.bkt.clouddn.com/gif/F.gif)


## 自动登录cnode论坛
新建一个config.js文件  

```

export default {
  username: "AlexZ33",
  password: "自己的密码"

}
```
run.js变成

```

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
import config from './config.js'

const run = async () => {
  await login()
}




const login = async () =>{
  await nightmare.goto('https://cnodejs.org/signin')
  await nightmare.wait('#signin_form')

  await nightmare.click('.form-actions :nth-child(2)')
  await nightmare.wait('#login_field')

  await nightmare.type('#login_field', config.username)
  await nightmare.type('#password',config.password)

  await nightmare.click('input[name="commit"]')
}

run()
```
 ![图片描述](http://on891bjlf.bkt.clouddn.com/gif/IF.gif)

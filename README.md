�򵥵������ű�
-------

��װ [nightmare](https://github.com/segmentio/nightmare)
��װ [babel-register](http://babeljs.io/docs/setup/#installation)
��װ [babel-polyfill](http://babeljs.io/docs/usage/polyfill/)

```
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const run = async () => {
  nightmare.goto('http://www.baidu.com')
}
```

�����goto���첽ִ�еģ��᷵��һ��promise
ǰ��Ӹ�await ʹ����ͬ���ķ�ʽִ��

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
  await nightmare.type('#kw','������')
  await nightmare.click("#su")
}


run()
```


![ͼƬ����](http://on891bjlf.bkt.clouddn.com/hexo/GIF.gif)


![ͼƬ����](http://on891bjlf.bkt.clouddn.com/gif/F.gif)


## �Զ���¼cnode��̳
�½�һ��config.js�ļ�  

```

export default {
  username: "AlexZ33",
  password: "�Լ�������"

}
```
run.js���

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
 ![ͼƬ����](http://on891bjlf.bkt.clouddn.com/gif/IF.gif)

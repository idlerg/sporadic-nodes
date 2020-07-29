## AJAX
> AJAX (Asynchronous JavaScript And XML)  异步的 JS 和 XML

不是新的编程语言 而是一种现有标准组合在一起使用的新方式

> XML 传输和存储数据

###### AJAX优点
- 在网页不刷新的情况下,向服务器发送请求,并接收返回值
- 允许根据用户实践来跟新部分页面内容

###### AJAX缺点
- 没有浏览历史,不能回退
- 存在跨域问题
- 对SEO不友好

#### 工具
- Process : 免费在线作图、实时协作
- Express : 基于 Node.js 平台，快速、开放、极简的 Web 开发框架

```
// new file
$ mkdir myapp
$ cd myapp

// init package.json
$ npm init

// development dependency
$ npm install express --save

// temporary
$ npm install express --no-save
```

- Nodemon : 可在检测到目录中的文件更改时通过自动重新启动节点应用程序来帮助开发基于node.js的应用程序。

```
// globally to system path
npm install -g nodemon

// as a development dependency
npm install --save-dev nodemon
```

#### HTTP协议

> HTTP协议 超文本传输协议,规定的浏览器和万维网服务器之间互相通信的规则
- 请求报文
- 格式与参数

```
行      type:POST  /url(路径) HTTP/1.1 (版本号) 
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent:chrome 83
空格
体      username=admin&password=admin
```

##### 响应报文

```
行      HTTP/1.1 200 OK
头      Content-type: text/html;charse=utf-8
        Content-length: 2048  长度
        Content-encoding: gzip  压缩方式
空格
体     <html></html>
```


### 原生
### jQuery
### fetch
### axios




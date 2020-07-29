// 引入express
const express = require('express')

// 创建应用对象
const app = express()

// 端口
const port = 3000

// 创建路由规则
// req 是对请求报文的封装
// res 是对响应报文的封装

// 原生AJAX GET请求
app.get('/server',(req, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('原生AJAX GET请求发送成功')
})

// 原生AJAX POST请求
app.post('/server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('原生AJAX PSOT请求发送成功')
})

// 原生AJAX all请求 可以设置自定义请求头
app.all('/server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头 设置允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers','*')

    response.send('原生AJAX PSOT请求发送成功')
})

// json-server
app.get('/json-server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    // response.send('原生AJAX GET请求JSON传值发送成功')

    // 返回对象 对象字符串转换
    const data = {
        name: 'idlerg',
        age: '18'
    }
    let str = JSON.stringify(data)
    response.send(str)
})

// 原生AJAX GET请求 IE浏览器
app.get('/ie',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('原生AJAX GET请求在IE浏览器发送成功......IE...')
})

// jQuery-server
app.all('/jQuery-server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'idlerg',
        age: '18'
    }
    response.send(JSON.stringify(data))
})

// axios-server
app.all('/axios-server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'idlerg',
        age: '18'
    }
    response.send(JSON.stringify(data))
})


// fetch-server
app.all('/fetch-server',(req, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    const data = {
        name: 'idlerg',
        age: '18'
    }
    response.send(JSON.stringify(data))
})



// 监听端口启动服务
app.listen(port, () => {
    console.log(`服务已启动,${port}端口监听中....`);
})
# NodeJS中间件概念与Express框架的结合

声明：md文档包含部分网上收集的案例加上自己个人理解，如有不同理解，则请以自己实际理解与他人理解结合理解。

### Nodejs中间件概念

在Nodejs学习中，会遇到中间件概念。中间件实际上在nodejs中表示为：`辅助http客户端与服务端通信，简化通信过程的一些方法`。

他通常存在于http请求和响应的“中间”，所以可以这样理解为“中间件”。在请求时，我们通常会遇到例如记录日志、ip过滤、查询字符串、请求体的解析、Cookie的处理、权限验证、参数验证、异常处理等多种事务。而我们开发者为了能够更多的关注实际业务开发以达到提高开发效率，则产生出了中间件为我们分担部分工作。

基本他是这样一个这样的形态：

![15842055-dde4fe84cd4282c0.png (1200×661) (jianshu.io)](https://upload-images.jianshu.io/upload_images/15842055-dde4fe84cd4282c0.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

他的具体代码的实现，则是这样：

```js
const middleware = (req, res, next) => {
  // TODO
  next()
}
```

当我们有多个中间件，基本是这样的：

```js
const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  next()
}

const middleware2 = (req, res, next) => {
  console.log('middleware2 start')
  next()
}

const middleware3 = (req, res, next) => {
  console.log('middleware3 start')
  next()
}
```

我们可以用一个数组来将每个中间件存放进去，形成一个`中间件数组`

```js
// 中间件数组
const middlewares = [middleware1, middleware2, middleware3]
function run (req, res) {
  const next = () => {
    // 获取中间件数组中第一个中间件
    const middleware = middlewares.shift()
    if (middleware) {
      middleware(req, res, next)
    }
  }
  next()
}
run() // 模拟一次请求发起
```

### 中间件队列

中间件队列就是多个中间件之间的执行顺序结构的基本队列结构形态，一般每个中间件应通过`next`表示跳转到下一个中间件的调用，直到执行队列中的最后一个中间件。

一般中间件是有匹配条件的，然后匹配条件的所有中间件集合，就是组成中间件队列的基本。

### 中间件在express框架中的应用

实战代码：（已有注释）

```js
import express from 'express'
// 使用express调用并创建一个应用
const app = express()

// 基本服务配置对象
const options = {
  host: '127.0.0.1',
  prot: 8080,
}

// 定义一组中间件队列
const middleware1 = (req, res, next) => {
  console.log('middleware1 start')
  // 使用next方法来结束当前中间件，跳转到下一个中间件的执行（如果有）
  next()
}
const middleware2 = (req, res, next) => {
  console.log('middleware2 start')
  next()
}
const middleware3 = (req, res, next) => {
  console.log('middleware3 start')
  next()
}
const middleware = [middleware1, middleware2, middleware3]

// 搭建基本路由
// 只有一个斜杠的路由，其中间件会在任何路由都触发（其次是看定义的顺序来触发）
app.use('/', middleware)

// 如果路由不是/ajax，则不会匹配到该路由，中间件也就不会触发
app.use('/ajax', (req, res, next) => {
  console.log('/ajax 路由')
  next()
})

app.use('/api', (req, res, next) => {
  console.log('/api 路由')
  // 通过res的send方法可以结束本次请求并返回data给客户端
  res.send('hello world')
})

// 使用express应用监听一个服务
app.listen(options.prot, () => {
  console.log(`服务启动在：${options.host}:${options.prot}`)
})
```


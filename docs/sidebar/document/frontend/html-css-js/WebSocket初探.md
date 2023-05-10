# WebSocket初探

## WebSocket原生JS实现

### 前端步骤
1. **获得WebSocket实例并指定websocket服务**
	
	```javascript
   const ws = new WebSocket('ws:localhost:8000') //在括号中填入目标通信url
   ```
   
2. **为websocket注册以下事件**

    2.1 注册open事件
    
    ```javascript
    ws.addEventListener('open',handleOpen,false)
    
    function handleOpen(e){ // 注意，可接收事件回调参数
    	console.log('open',e)
    }
    ```
    2.2 注册close事件
	```javascript
    ws.addEventListener('close',handleClose,false)
    
    function handleClose(e){ 
    	console.log('close',e)
    }
    ```
    3.3 注册error事件
    ```javascript
    ws.addEventListener('error', handleError, false)
    
    function handleError(e){
    	console.log('error',e)
    }
    ```
    3.4 注册message事件
    ```javascript
    ws.addEventListener('message', handleMessage, false)
    
     function handleMessage (e) {
        console.log('message：', e)
     }
    ```

### 后端步骤

1. **初始化项目并安装ws包**

      初始化项目
      
         > npm init -y
      
       安装ws包
      
         > npm install ws -S

2. **开启并使用websocket服务**

    ```javascript
    /* index.js */
    
    // 1. 引入ws模块
    const Ws = require('ws')
    
    
    // 2. 建立一个websocket服务并配置
    //    port：开启ws服务的端口
    //    verifyClient：连接验证函数
    const server = new Ws.Server({ port: 8000, verifyClient: socketVerify }) // ws:localhost:8000
    
    // 3. 连接时验证（可选，可不进行连接验证）
    function socketVerify (info) { // info是请求连接的客户端相关的信息
      // console.log('客户端信息:', info)
      console.log(info.origin) // 客户端源
      console.log('连接验证成功')
      // 返回true表示验证通过,false表示不通过
      return true
    }
    
    const init = () => {
      bindEvent()
    }
    
    // 4.注册所有websocket对应的事件
    function bindEvent () {
      // 为server绑定对应事件
      // 4.1 connection，该事件当用户成功连接客户端后触发
      server.on('connection', handleConnection)
      // 4.2 close，该事件当用户连接关闭时触发
      server.on('close', handleClose)
      // 4.3 error，该事件当通信发生错误时触发
      server.on('error', handleError)
    }
    
    function handleClose () {
      console.log('websocket close')
    }
    function handleError () {
      console.log('websocket error')
    }
    function handleConnection (ws) {
      console.log('websocket connection')
      // message事件是通过connection的事件对象去注册，推荐在用户连接后即可注册
      ws.on('message', handleMessage)
    }
    function handleMessage (msg) {
      // 接收的Buffer二进制数据流可以通过JSON.parse转换为真实对象
      // const message = JSON.parse(msg)
      // 将消息分发给所有客户端,通过遍历clients,clients是所有客户端的集合
      // 遍历每个客户端,参数则是每个客户端实例
      server.clients.forEach(c => {
        // 通过实例的send方法发送数据给当前所循环的客户端
        c.send(msg)
      })
    }
    
    init()
    
    ```

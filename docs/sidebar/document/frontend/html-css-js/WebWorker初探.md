# WebWorker初探

## WebWorker介绍

​	Web Worker是HTML5新增特性，能够支持JS多线程，其实JS本质上并不支持多线程，Worker能够实现多线程是因为浏览器（宿主环境）的原因，和JS本身没有关系，也就是说JS当前并没有任何支持多线程执行的功能。

​	但是像浏览器这样的宿主环境，很容易提供多个JS引擎实例，各自运行在自己的线程上。这样可以在每个线程上运行不同的程序，不会干扰主线程的执行。Worker可以有多个，每个这样独立的多线程部分被称为一个Worker，这种类型的并行化称为任务并行，因为其重点在于把程序划分为多个块来并发运行。

## WebWorker本质

​	WebWorker本质上就是一个JS文件，在HTML5新增特性后，JavaScript就拥有了一个全局对象self，该全局对象相当于window，拥有window身上所有的属性和方法。通过监听它的message事件可以监听来自主线程文件发送来的**消息**。

## 使用WebWorker

### 主线程文件

1. 引入新建的worker文件

   ```typescript
   const worker1 = new Worker("worker1.js")
   ```

2. 主线程给worker发送消息（数据）

   主线程给worker发送信息，通过worker实例的postMessage方法，消息可以是文本，也可以是对象。需要注意的是，这种通信是拷贝关系，即是传值而不是传址，Worker 对通信内容的修改，不会影响到主线程。

   ```typescript
   worker.postMessage('Hello World')
   worker.postMessage({method: 'echo', args: ['Work']})
   ```

3. 主线程监听worker发送的信息，通过worker实例的message事件来监听

   事件的回调参数就是消息对象的相关内容，其中的data属性就是具体的消息数据。

   ```typescript
   worker.addEventListener('message', e => {
     console.log('监听来自worker1线程的消息数据：', e.data)
   })
   ```

4. 主线程可监听worker错误

   当worker内部错误时，通过为worker实例注册error事件，可以在主线程中监听到worker的错误。（回调参数就是错误对象相关的内容）

   ```typescript
   worker.addEventListener('error', err => {
     console.log('错误信息:', err.message)
   })
   ```

5. 主线程可以关闭worker

   worker完成任务后，主线程可以关闭worker，通过worker实例的terminate方法。为了节省资源，使用完worker时应当关闭worker。

   ```typescript
   worker.terminate()
   ```

### Worker线程文件

1. 通过self，worker可以添加message事件，并监听主线程发送来的消息，回调参数就是主线程发送消息的具体数据

   self是新增的对象，是一个全局对象，相当于window

   ```typescript
   self.addEventListener('message',e => {
       console.log('监听到来自主线程的消息：', e.data)
   },false)
   ```

2. 通过self的postMessage可以给主线程发送消息（数据）

   ```typescript
   self.postMessage('worker1 msg')
   ```

3. worker内部可自己监听error，回调参数就是具体的错误信息

   ```typescript
   self.addEventListener('error', err => {
     console.log('worker内部监听错误：', err.message)
   })
   ```

4. 通过self的close方法，worker可以在内部自己关闭worker，应当在适当的时机关闭。

   ```typescript
   self.close()
   ```

   
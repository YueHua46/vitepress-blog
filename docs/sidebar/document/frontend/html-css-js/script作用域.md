# script作用域
**细节补充：**

​	var和const以及let定义的变量”未完全初始化前“是undefined，但const和let在“未完全初始化”之前无法被访问（TDZ）所以看起来像是没有被初始化为undefined，但是通过debugger可以看得见。

```javascript
debugger
const b = 'script b' // b:undefined
```

## 作用域的分类

1. **全局作用域**

   ​	全局作用域说的就是`window`，在script脚本开始执行时便被创建。任何作用域下都可以访问该作用域下的定义。

2. **本地作用域（函数）**

   ​    本地作用域也叫函数作用域或局部作用域，在函数执行时创建，在其函数内部的上下文环境中可以看见。外部全局作用域无法访问其本地作用域的定义。

3. **块作用域**

   ​    块作用域是ES6（ES2015）新增特性，随`let`和`const`同出，在`{}`内部中通过let和const去定义变量或常量时被创建。在其作用域内的定义，如果是let和const定义，则只在该块作用域中生效。如果是var定义，则在全局window生效。

   ```javascript
   {
       const c = 'Block c'
       console.log(c) // 'Block c'
   }
   console.log(c) // error
   ```

4. **script作用域**

   **简单介绍：**

   ​    script作用域是本篇文章的重头，它类似于块作用域，像是一个全局的块作用域，他和window同级的。script作用域和块作用域的关系就像全局作用域和函数作用域之间的关系。他们非常相似，只是一个是全局，一个是局部。同时script作用域拥有块作用域的特性，你在全局中使用到let或const定义时他才会被创建出来。所以我们可以总结出：

   **总结：**

   1. script作用域是块作用域的全局，就像全局作用域和函数作用域之间的关系。他们非常相似，只是一个是全局，一个是局部。
   2. 同时script作用域的特性和块作用域一样，如果内部没有let和const定义，作用域便不会被创建出来。也就是说如果整个script脚本没有任何let和const定义，那么script作用域不会被创建。

   **请在控制台自行按照以下方式去验证本篇文章的赘述。**

   ```javascript
   debugger
   var a = 'window a'
   
   debugger
   const b = 'script b'
   debugger
   {
       const c = 'Block c'
       debugger
   }
   function Fun() {
       const a = 'Fun a'
       var b = 'Fun b'
       debugger
   }
   Fun()
   ```

   [![oTIv4g.gif](https://s4.ax1x.com/2021/12/11/oTIv4g.gif)](https://imgtu.com/i/oTIv4g)

## 那let和const的定义，实质上是如何被访问到的？

​	既然我们已经知道了全局下的let和const定义会被放到script作用域内，然后又因为script类似块作用域的特性，那么我们可以从块作用域内的变量是如何被访问到的从而下定论。那么我们在块作用域下是如何访问到let和const定义的？答案就是：**直接访问**。他和函数作用域内部的环境是一样的，所有的定义都放到了script作用域中，但他并没有暴露这个script作用域，同时你可以直接访问到它的定义。

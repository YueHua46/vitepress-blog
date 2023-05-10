# ReactRouter的使用过程记录



## 1. Install react-router-dom

> npm i react-router-dom

## 2. 在指定全局引入相关API

```javascript
// 引入React中H5的history模式
// 引入H5的history和Route以及Route
import {BrowserRouter, Routes, Route} from 'react-router-dom'
```

## 3. 使用以下代码包裹全局组件

**App示例：**

```javascript
import React, { Component } from "react"
// 1.引入相关API
import { BrowserRouter, Routes, Route } from "react-router-dom"
// 2.引入相关组件
import Home from "./routes/Home"
import About from "./routes/About"

class App extends Component {
  render() {
    return (
      // 使用BrowserRouter包裹整个路由
      <BrowserRouter>
      // Routes表示路由组，在这里表示2级路由
        <Routes>
      		// 这里的Route表示单个路由，path设置他们的路由路径，element设置他们的路由映射组件
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
```

## 4. 一些其他知识：

1. 不匹配路由：

   ```javascript
   {/* 添加不匹配路由，即Not Found路由，他的权限最低，索引路由没找到才轮到他 */}
   <Route
     path="*"
     element={
       <main style={{padding: '1rem'}}>
         <p>There's nothing here!</p>
       </main>
     } />
   ```

2. 索引路由：

   ```javascript
   {/* 索引路由是该父级路由的默认路由，他没有path，所有当前级别路由url都不匹配时选择该索引路由*/}
   <Route
     index
     element={
       <main style={{padding: '1rem'}}>
         <p>Select an invoice</p>
     </main>}
   />
   ```

## 5. Link和NavLink与Outlet内置组件

刚才我们所介绍的route均是配置路由选项，配置之后允许我们通过url去指定跳转到指定路由组件。不过这还没完，我们需要通过Link内置组件去实现用户点击后路由跳转，而不是手动在url中输入路由。所以在这里我们会介绍两个内置组件的基本使用。Link相当于vue中的route-link，作用是跳转到指定路由，NavLink和Link区别在于NavLink可以记录action（激活状态），具体用法看示例：

1. Link组件

   通过to属性，指定跳转的prop，在实际打包后生成的标签是a标签

   ```javascript
   import {Link} from 'react-router-dom'
   <Link to="/home">Home</Link>
   ```

2. NavLink组件

   同上，区别在于在使用style和class属性时，可以使用函数形式，该函数可接收到当前映射组件是否是激活状态，可通过解构传递的参数对象中的isActive，从而判断是否为激活，然后渲染对应的style。class同理

   ```javascript
   import {NavLink} from 'react-router-dom'
   <NavLink 
    to="/about" 
    style={({ isActive }) => (isActive ? { color: "red" } : {})}
   >About</NavLink>
   ```

3. Outlet组件

   当点击Link时，便成功跳转到路由，但还差一件事，那就是告诉react跳转后的组件应该被渲染到哪里。所以我们需要Outlet组件来占位，相当于vue中的route-view。

   ```javascript
   import {Outlet} from 'react-router-dom'
   <Outlet/>
   ```

### 完整代码：

```jsx
import React, { Component } from "react"
import { NavLink, Outlet } from "react-router-dom"
class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    )
  }
}
export default Layout
```

## 6. 路由组件懒加载的实现

实际上现在我们初次访问时会一次性加载所有的路由组件，即使我们还未点击他。如果我们想要懒加载的效果，那么可以按照以下的方式来实现：

1. 引入lazy，然后异步加载路由组件

   ```jsx
   import {lazy} from 'react'
   const Home = lazy(_=>import('./Home.jsx'))
   ```

2. 引入Suspense内置组件，并通过以下方式配置即可

   ```jsx
   {/* Suspense组件能够为我们动态导入的组件实现延迟加载*/}
   <Route
     path="about"
     element={
       <Suspense fallback={<h4>Component Loading...</h4>}>
         <About />
       </Suspense>
     }
    />
   ```

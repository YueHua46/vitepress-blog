# React-Redux标准创建流程（TypeScript）

假设我们要实现一个Count组件的redux

## 准备工作

> npm i redux react-redux redux-thunk redux-devtools-extension -D

## actions的创建

### 1. 先创建Count的ActionsType常量

```ts
// src/store/actions/actionTypes.ts

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

### 2. 再创建state的data数据类型

```ts
// src/store/actions/actionDataTypes.ts

export type CountStateType = number
```

### 3. 之后开始创建Count的Actions

```tsx
// src/store/actions/count.ts

import {INCREMENT, DECREMENT} from './actionTypes/count'
import {CountStateType} from './actionDataTypes/count'

// 创建Action
// 创建同步Action
export const incrementAction = (num: CountStateType) => ({
  type: INCREMENT,
  data: num * 1,
})
export const decrementAction = (num: CountStateType) => ({
  type: DECREMENT,
  data: num * 1,
})
// 创建异步Action，返回的回调参数是dispatch，异步action中一般都要掉用同步action
// 可以在这个地方发送网络请求
export const incrementAsyncAction =
  (data: CountStateType, time: number = 1000) =>
  (dispatch: any) =>
    setTimeout(() => dispatch(incrementAction(data)), time)

```

## reducers的创建

### 1. 创建Count的reducer函数的action参数的类型

```ts
import {INCREMENT, DECREMENT} from '../../actions/actionTypes/count'
import {CountStateType} from '../../actions/actionDataTypes/count'

// 定义Count的reducer的action参数类型
export interface CountReducerActionType {
  type: typeof INCREMENT | typeof DECREMENT
  data: CountStateType
}

```

### 2. 创建Count的reducer

```ts
// src/store/reducers/count.ts

import {INCREMENT, DECREMENT} from '../actions/actionTypes/count'
import {CountStateType} from '../actions/actionDataTypes/count'
import {CountReducerActionType} from './types/count'

export default function countReducer(
  preState: CountStateType = 0,
  action: CountReducerActionType
) {
  // 解构获得reducer当前的action类型和data
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

```

### 3. 创建store的主文件

```ts
// 整个应用只有一个store
// 引入创建store对象的redux
import {createStore, applyMiddleware, combineReducers} from 'redux'

// 引入redux-thunk中间间，能够在dispatch时传递函数来实现异步action
import thunk from 'redux-thunk'
// 引入为count服务的reducer
import countReducer from './reducers/count'

// 传递第二个参数，应用thunk中间件
// 引入redux devtools
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(
  // 使用combineReducers来创建一个能够进行多组件状态之间共享state的store
  combineReducers({count: countReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
```

### 4. 入口文件中应用store

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 从redux中引入 Provider
import {Provider} from 'react-redux'
// 引入 store
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    {/* 应用store并包裹需要共享的组件 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

```


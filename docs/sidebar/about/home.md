---
layout: doc
title: VitePress中Markdown的基本应用
---


# {{ $frontmatter.title }}

## 目录
[[toc]]

## 更加方便的显示表情
:tada: :100:

## 卡片信息
- INFO卡片信息
::: info
This is an info box.
:::

- TIP卡片信息
::: tip
This is a tip.
:::

- WARNING卡片信息
::: warning
This is a warning.
:::

- DANGER卡片信息
::: danger
This is a dangerous warning.
:::

- DATAILS卡片信息
::: details
This is a details block.
:::

- DANGER STOP卡片信息
::: danger STOP
Danger zone, do not proceed
:::

- DATAILS CODE卡片信息
::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## 代码高亮
```js
export default {
  name: 'MyComponent',
  // ...
}
```

## 代码块中的行突出显示
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
指定多行突出
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## 高斯模糊代码块
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码中的增删提示
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码中的错误和警告
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 导入代码片段
可以导入现有文件到代码片段（@的根目录在docs下）

<<< @/test.ts{typescript}


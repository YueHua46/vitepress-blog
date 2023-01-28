# Nuxt3初试笔记

## 安装并进入目录

> npx nuxi init project-name
>
> cd project-name
>
> yarn
>
> code .

## 删除不必要的初始化环境

删除根目录下的app.vue，我们会自己创建首页

## Pages目录功能

### 基本功能

1. 在Pages下定义的vue组件，将被Nuxt解析为一个路由，其路由的URL由所定义的vue文件名决定。
2. 在Pages下定义的所有vue组件，都将自动导入（`Auto Import`）而无需手动通过`import Test from '../test.vue'`的方式

例如在项目根目录下创建pages文件夹

> mkdir pages
>
> cd pages

然后在pages里定义index的vue文件并写入一些基本内容，然后输入以下命令启动服务

> yarn dev

之后便可以看到定义的index的vue组件被正常显示。

- 在pages目录下的index的vue组件将被路由解析url为：`/`

- 在pages目录下持续创建其他路由组件，例如`about.vue`，它将被路由解析为：`/about`

- 在pages目录下创建目录`products`，然后在里面创建`index.vue`，此时该组件将被路由解析为：`/products`
- 在pages目录下创建目录`products`，然后在里面创建`test.vue`，此时该组件将被路由解析为：`/products/test`

### 创建能够接收动态参数的路由组件

在根目录下的`pages/products`目录下新建一个组件名为：`[id].vue`，此时在项目的url路径输入：`localhost:xxxx/products/10`，便可以在该组件中通过以下方式获取到这个动态参数`10`

接收方式有两种

#### 模板中直接使用动态参数

```vue
<template>
  <div>
    <h2>Products Page Id : {{ id }}</h2>
    <!-- 第一种使用动态参数的方式 -->
    <h2>Products Page Id : {{ $route.params.id }}</h2>
  </div>
</template>
```

#### script中使用`useRoute`来接收

```vue
<script setup lang="ts">
// 第二种使用动态参数的方式
const route = useRoute();
const id = computed(() => {
  return route.params.id;
});
</script>

<style scoped></style>
```

## 路由跳转

路由跳转大概有两种方式：

### 1. NuxtLink内置组件跳转

```vue
<template>
  <h2>Hello Nuxt!!!</h2>
  <!-- 使用NuxtLink内置组件来跳转路由 -->
  <NuxtLink to="about">Take me to About Page</NuxtLink>
  <HelloWorld />
</template>

<script setup lang="ts"></script>

<style scoped></style>

```

### 2. navigateTo内置方法跳转

```vue
<template>
  <h2>About Page</h2>
  <button @click="toHomePage">Take me to Home</button>
</template>

<script setup lang="ts">
function toHomePage() {
  // 使用navigateTo内置方法来跳转路由
  navigateTo("");
}
</script>

<style scoped></style>

```

## components目录功能

在项目根目录下创建一个文件夹名为components

> mkdir components

在components目录下所定义的所有组件，都被全局暴露在任何组件中，无需导入即可使用。

### 组件命名

如果components中的文件夹嵌套，例如：

```
| components/
--| base/
----| foo/
------| Button.vue
```

则实际在被解析时是：`BaseFooButton`，所以在其他组件中使用时，则是这样用：

```vue
<BaseFooButton />
```

### 动态导入（懒加载）

需要动态导入一个component组件，只需要在组件名最前方加入关键字：`Lazy`，如动态导入`Footer`组件则是使用以下组件名：

```vue
<LazyFooter/>
```

## Layouts目录功能

主要是存放一些能够复用的UI级组件

### 特性

在`Layouts`目录下的组件，需要在其中定义布局的基础结构，并在适当位置塞入`slot`内置组件，这个`slot`组件便是其他例如`pages`中组件使用该`layout`组件时所占的元素布局位置。

### 默认Layout

默认layout是所有其他pages的组件所应用的默认layout，其所有的pages组件都会将其组件的template放到默认layout中的slot位置

### 手动设置Layout

如果layouts中的组件命名不为`default.vue`，则其在其他pages中组件使用时需要通过以下方式指定其layout为该组件的布局基础：

```vue
<!-- layouts/custom.vue -->
<template>
  <div>
    Some *custom* layout
    <slot />
  </div>
</template>
```



```vue
<!-- pages/index.vue -->
<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>
```

### 禁用Layout布局

如果某个`page`不需要应用`layout`，则可以通过以下方式设置

```vue
<script setup>
definePageMeta({
  layout: false,
});
</script>
```

## Assets目录功能

Assets用于提供一些css或sass或less等静态文件的处理，例如如果我们要在nuxt3中集成taiwindcss，则需要做以下步骤

### 集成taiwindcss到nuxt3

1. 安装taiwindcss依赖

   ```bash
   npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8
   ```

2. 初始化taiwindcss配置文件

   ```bash
   npx tailwindcss init
   ```

3. 在nuxt.config.ts中将配置改为如下

   ```typescript
   export default defineNuxtConfig({
     // 在配置项中加入postcss对象并写入如下内容
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   });
   ```

4. 在taiwindcss.config.js中更改为如下配置

   ```javascript
   
   /** @type {import('tailwindcss').Config} */
   module.exports = {
      content: [
       "./components/**/*.{js,vue,ts}",
       "./layouts/**/*.vue",
       "./pages/**/*.vue",
       "./plugins/**/*.{js,ts}",
       "./nuxt.config.{js,ts}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. 在项目根目录新建目录结构：`assets/css/main.css`，在`main.css`中写入如下内容：

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. 在nuxt.config.ts中将如下配置加入到配置对象中

   ```typescript
   export default defineNuxtConfig({
     css: ["@/assets/css/main.css"], // 加入这行在这里
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   });
   
   ```

​	到此结束，可以通过`npm run dev`或`yarn dev`来启动项目测试

## Public目录功能

在该目录下的所有资源将被原封不动的搬动到build之后的public目录下，在实际的url中，会忽略掉public，如在`public/images/1.gif`，在组件中使用时是：

```vue
<img src="/images/1.gif" alt="gif" />
```

而在实际的url中，则是这样的形式

`localhost:3000/images/1.gif`

所以在public中所放入的静态资源一般为图片或视频音频等

## Head管理

通过head管理可以更改head标签的一些内容，如title，meta等。可通过配置或动态更改。以便提高SEO搜索

### 全局head配置

在`nuxt.config.ts`中通过`app.head`设置全局的`title`配置

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})
```

### 局部head配置

使用`useHead`可以在`setup`中动态管理头部元数据，如页面`title`等，局部配置优先于全局配置，如：

```vue
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
})
</script>
```

也可在组件中通过内置组件如：`<Title>`、`<Base>`、`<Style>`等形式来动态配置head。如：

```vue
<script setup>
const title = ref('Hello World')
</script>
<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <h1>{{ title }}</h1>
  </div>
</template>
```

## 可复用组合逻辑Composables目录

在 Nuxt3 的约定下，用户在`composables`目录下创建的组合逻辑文件将会被系统自动识别导入到应用程序，以供全局使用。

简而言之，他就是帮助注册我们所定义的`hook`到全局组件范围，以便全局可用，提高复用性。

所有内置的Composable：[useAppConfig · Nuxt Composables](https://nuxt.com/docs/api/composables/use-app-config)

## useState在Composables中的应用

`useState` 是一个 SSR 友好的 `ref` 替代品。它的值将会在服务端渲染（客户端渲染期间）后保留，并且使用唯一的键在所有组件之间共享。

通常我们应该在Composables中去使用useState来定义全局hook

```typescript
// composables/states.ts
export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
```

## 数据获取

Nuxt提供了4种数据请求的API，常用的是`useFetch`

在`pages`目录、`components`目录和`plugins`目录下使用`useFetch`也同样可以获取到任意的 URL 资源。

### useFetch Exemple

```vue
<template>
  <form @submit.prevent="submitForm">
    username：<input class="border" type="text" v-model="formData.username" />
    <br />
    password：<input
      class="border"
      type="password"
      v-model="formData.password"
    />
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
const formData = reactive({
  username: "",
  password: "",
});
const url = "http://httpbin.org/post";
async function submitForm() {
  const { data, error } = await useFetch(url, {
    method: "POST",
    body: formData,
  });
  console.log("data:", data.value);
  console.log("error:", error);
}
</script>

```

## Middleware中间件及目录

路由中间件是接收当前路由和下一个路由作为参数的导航守卫。

通过在middleware中间件目录下定义中间件文件，然后通过API：`defineNuxtRouteMiddleware`来操作

具体为格式为：

```typescript
<!-- middleware/some-middleware.ts -->
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```

middleware有三种类型：

### 匿名路由中间件

直接在page中通过API：`definePageMeta`中去定义，生效范围只在当前page中。Exemple：

```vue
<script setup lang="ts">
definePageMeta({
  middleware: () => {
    console.log("匿名路由middleware");
  },
});
</script>
```

### 命名路由中间件

在项目根目录下的`middleware`里定义的路由中间件，定义格式为：

```vue
<!-- middleware/say-hello.ts -->
export default defineNuxtRouteMiddleware(() => {
  const console = useConsole();
});
```

在page中使用时，则根据文件名来应用。文件名应按照`say-world`这种格式定义于使用。

当在`middleware`中定义了中间件后，可在任意page中应用。如下

```vue
<script setup lang="ts">
definePageMeta({
  // 应用命名路由中间件，可应用多个
  middleware: ["say-hello"],
});
</script>
```

### 全局路由中间件

在项目根目录下的`middleware`中定义中间件时，通过命名后缀为：`xxx.global.ts`来使该中间件在全局所有page中生效，如：

```typescript
<!-- middleware/count.global.ts -->
export default defineNuxtRouteMiddleware(() => {
  const count = useCount();
  count.value++;
});
```

这样，在page中无需通过`definePageMeta`去应用，便可使用

## Server目录功能

Nuxt将会自动识别项目根目录下的`server/api`、`server/routes`、`server/middleware`等文件夹内的各种功能。

每个在其中定义的文件都应当使用API：`defineEventHandler()`并默认导出

### Server API Exemple

在`server/api/hello.ts`中定义api

```typescript
export default defineEventHandler((event) => {
    return {
        api: "works"
    }
})
```

在`pages/xxx.vue`中调用该api

```vue
<script lang="ts" setup>
const { data } = useFetch("/api/hello");
console.log("data", data);
</script>
```

### Server Routes Exemple

在`server/routes`中定义的所有路由，都可以省略如上`server/api`中的`/api/xxx`的api这个前缀，可直接使用`xxx`请求，如：

```vue
<script lang="ts" setup>
// 调用server/api下的api，需要加上api前缀
const { data } = useFetch("/api/hello");
console.log("data", data.value);
// 调用server/routes下的api，无需加上任何前缀请求
const { data: data2 } = useFetch("/hello");
console.log("data2", data2.value);
</script>
```

## Nuxt3打包说明

### 打包为拥有前后端功能的全栈项目

> npm run build

### 打包为仅有前端的静态页面项目

> npm run generate

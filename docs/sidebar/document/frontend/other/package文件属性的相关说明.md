# package.json 文件的相关属性介绍

### name

该字段表示为包名

```json
"name": "nodejs"
```

### version

该字段表示为包的版本，通常是`x.x.x`格式，第一个 x 为大版本
第二个 x 为小版本，第三个 x 为补丁版本

```json
"version": "1.0.0"
```

### main

该字段表示为包的入口文件

```json
"main":"main.js"
```

### license

该字段表示包所使用的协议，通常是 MIT 协议（相关说明请百度）

```json
"license": "MIT"
```

### keywords

该字段通常是包相关的关键字字符的集合，用于npmjs网站更好的检索

```json
"keywords": [
  "email",
  "cms",
  "ai"
]
```

### contributes

该字段通常是贡献者的集合

```json
  "contributors": [
    {
      "name": "joe",
      "email": "mail@xxx.com",
      "url": "https://xxx.xxxxx.xxx"
    }
  ]
```

### bugs

通常是链接到软件包问题跟踪器，最常应用的是github上的issues

```json
"bugs": "https://github.com/nodejscn/node-api-cn/issues"
```

### homepage

通常是该包的主页

```json
"homepage":"https://xxxxxx.cn"
```

### description

通常是对软件包的简短描述，当提交到github上，则会展示到项目右上角的简介

```json
"description":"NodeJS"
```

### repository

指定了包的仓库所在地址

```json
"repository": "github:nodejscn/node-api-cn",
"repository": "gitlab:nodejscn/node-api-cn",
"repository": "gitee:nodejscn/node-api-cn",
```

### scripts

可用于定义一组可以运行的node脚本

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

这些脚本可通过`npm run 脚本key`来运行，如：

> npm run test

如key为start的脚本，可省略run（特殊）

> npm start

### dependencies

这会是package中最常见的字段之一，它表示该包所依赖的其他软件包列表。当使用`npm install <packageName>`或`yarn add <packageName>`安装包时，会将该包的key和对应的版本写入到dependencies字段中。

```json
"dependencies": {
  "vue": "^2.5.2"
}
```

### devDependencies

该字段表明列表中的依赖包，是作为开发环境所应用的，而不是生产环境。这代表这些包在实际打包时，不应该被打包集合在生产代码中。

通过`npm install --save-dev <packageName>`或`yarn add --dev <packageName>`将下载的依赖包定义为开发环境并写入到devDependencies字段中。

```json
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

### engines

表示此软件包要运行所需要的node或npm或yarn版本

```json
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

### browserslist

用于告知要支持哪些浏览器（及其版本）。 Babel、Autoprefixer 和其他工具会用到它，以将所需的 polyfill 和 fallback 添加到目标浏览器。

```json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]
```

此配置意味着需要支持使用率超过 1％（来自 [CanIUse.com](https://caniuse.com/) 的统计信息）的所有浏览器的最新的 2 个主版本，但不含 IE8 及更低的版本。

### 某些包特有的属性字段

在`package.json`文件中，还可以承载一些其他包特有的属性字段配置，如babel的`babel`属性字段，ESLint的`eslintConfig`属性字段，可在相应的包文档中找到如何应用它们的说明。

```json
 "babel": {
      "presets": ["@babel/preset-env"], // 插件集合
      "plugins": [...] // 指定插件
 },
"eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
      ],
      "rules": {},
      "parserOptions": {
        "parser": "babel-eslint"
     },
    ...
   }
```


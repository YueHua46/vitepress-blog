# 发布npm包

## 1. 定义包配置

**package.json文件**

```json
{
  "name": "xxx", // name定义包名
  "version": "1.0.0", // 包版本号
  "description": "", // 包描述
  "main": "index.js", // 包入口文件（暴露api的主文件）
  "scripts": {},
  "keywords": [], // 包关键词（如CSS，JS）
  "author": "ShengXi", // 包作者
  "license": "MIT", // 包协议
  "dependencies": { // 包的其他开发依赖
    "lodash": "^4.17.21"
  }
}
```

## 2. 切换为官方npmjs源

> npm config set registry https://registry.npmjs.org

发布成功后记得切换回淘宝源：

>  npm config set registry https://registry.npm.taobao.org

## 3. 检测是否成功切换源

> npm config get registry

提示为：https://registry.npmjs.org/ 则切换成功

## 4. 登录npm

> npm adduser

然后根据你的npm账号输入账号密码和邮箱登录即可

如果没有账号，需要先在npmjs官网进行注册：[npm (npmjs.com)](https://www.npmjs.com/)

## 5. 发布npm包

> npm publish

在npm官网搜索刚刚发布的npm包：[npm (npmjs.com)](https://www.npmjs.com/)

能够成功搜索，即代表发布成功

后续想要发布其他版本，可在package.json中修改version的版本号然后再次`npm publish`即可
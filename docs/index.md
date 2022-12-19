---
layout: home

hero:
  name: Yuehua Blog
  text: 使用VitePress搭建的Blog
  tagline: 主要记录 前端/Nodejs后端/其他 等相关技术文档Blog
  image:
    src: https://resource-1314318362.cos.ap-shanghai.myqcloud.com/imgs/keqing.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /sidebar/document/frontend/html-css-js/html
    - theme: alt
      text: View on GitHub
      link: https://github.com/ShengXi2000
features:
  - icon: ⚡
    title: 前端
    details: HTML5/CSS3/JavaScript/TypeScript/Vue/React
  - icon: 🖖
    title: 后端
    details: Nodejs/Express/Nestjs/Mysql/Prisma/Nginx
  - icon: 🎮
    title: 游戏
    details: 守望先锋2/全境封锁2/Genshin Impact/荒野大嫖客2
lastUpdated: true
outline: 2
---


<style>
  /* 
    background #C147E9
    border #DA6DFF
    color #ffffff
  */
:root {
  /* 主页配色 */
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #C147E9, #DA6DFF)!important;
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #9b59b6 50%, #9b59b6 50% )!important;
  --vp-home-hero-image-filter: blur(80px)!important;

  /* 主页按钮配色 */
  --vp-button-brand-bg:#C147E9 !important;
  --vp-button-brand-border:#DA6DFF !important;
  --vp-button-brand-hover-bg:#AF25DC;
  --vp-button-brand-hover-border:#DA6DFF !important;
  --vp-button-brand-active-border:#DA6DFF !important;

  /* 网站主题配色 */
  /* 网站文本颜色 */
  --vp-c-brand:#DA6DFF !important;
  --vp-c-brand-dark:#DA6DFF !important;
  --vp-c-brand-light:#DA6DFF !important;
  /* 网站文本颜色 */
  --vp-v-text-2:#DA6DFF !important;

}
/* 主页右边列表active颜色 */
a.outline-link.active {
  color:#DA6DFF !important;
}
</style>

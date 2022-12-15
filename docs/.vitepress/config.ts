import { UserConfig } from "vitepress";
const config: UserConfig = {
  // 是否允许切换dark模式（默认允许）
  appearance: true,
  // 语言
  lang: "zh-CN",
  // 应用标题
  title: "HOME",
  description: "VitePress 描述",

  // 主页配置
  themeConfig: {
    siteTitle: "HOME",
    // 主页logo
    logo: "https://vitejs.dev/logo-with-shadow.png",
    // 内容页右边大纲的标题
    outlineTitle: "索引",
    // 最后更新文本：
    lastUpdatedText: "Updated Date",
    // 自定义文档页脚的上/下页文本内容
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/ShengXi2000" },
      // 您还可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg t="1671103532279" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2677" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M511.993 30.426c-265.961 0-481.567 215.614-481.567 481.58 0 265.969 215.607 481.568 481.567 481.568 265.967 0 481.582-215.6 481.582-481.568 0-265.966-215.615-481.58-481.582-481.58z m205.43 611.528c-15.266 13.095-35.13-43.169-37.985-34.51-6.951 21.042-10.241 35.13-30.724 58.034-1.087 1.242 23.708 10.212 30.724 29.328 6.703 18.311 19.802 47.328-65.792 56.452-50.246 5.336-86.526-26.784-90.125-26.445-6.734 0.59-3.755 0-10.924 0-5.926 0-6.298 0.404-11.853 0-1.521-0.152-18.218 26.445-92.887 26.445-57.85 0-72.806-36.435-61.17-56.452 11.638-20.048 31.036-25.853 28.305-29.049-13.469-15.611-22.78-32.308-28.334-47.39-4.091-10.963-6.815-23.644-7.596-36.845 2.073 17.853-14.035 73.218-31.322 60.432-17.287-12.788-15.734-45.342-4.562-76.47 11.297-31.407 39.755-61.634 40.065-68.338 1.118-24.828-2.452-28.955 0-35.473 5.462-14.617 12.104-8.999 12.104-16.572 0-95.494 70.912-172.956 158.493-172.956s158.584 77.463 158.584 172.956c0 3.662 9.499 0 14.06 16.572 0.932 3.444 1.584 16.636 0.465 35.473-0.528 9.064 24.114 20.08 36.838 68.338 12.756 48.225 0 71.008-6.363 76.47zM511.993 30.426c-265.961 0-481.567 215.614-481.567 481.58 0 265.969 215.607 481.568 481.567 481.568 265.967 0 481.582-215.6 481.582-481.568 0-265.966-215.615-481.58-481.582-481.58z m205.43 611.528c-15.266 13.095-35.13-43.169-37.985-34.51-6.951 21.042-10.241 35.13-30.724 58.034-1.087 1.242 23.708 10.212 30.724 29.328 6.703 18.311 19.802 47.328-65.792 56.452-50.246 5.336-86.526-26.784-90.125-26.445-6.734 0.59-3.755 0-10.924 0-5.926 0-6.298 0.404-11.853 0-1.521-0.152-18.218 26.445-92.887 26.445-57.85 0-72.806-36.435-61.17-56.452 11.638-20.048 31.036-25.853 28.305-29.049-13.469-15.611-22.78-32.308-28.334-47.39-4.091-10.963-6.815-23.644-7.596-36.845 2.073 17.853-14.035 73.218-31.322 60.432-17.287-12.788-15.734-45.342-4.562-76.47 11.297-31.407 39.755-61.634 40.065-68.338 1.118-24.828-2.452-28.955 0-35.473 5.462-14.617 12.104-8.999 12.104-16.572 0-95.494 70.912-172.956 158.493-172.956s158.584 77.463 158.584 172.956c0 3.662 9.499 0 14.06 16.572 0.932 3.444 1.584 16.636 0.465 35.473-0.528 9.064 24.114 20.08 36.838 68.338 12.756 48.225 0 71.008-6.363 76.47z" p-id="2678"></path></svg>',
        },
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=kRGTs5DaGA28XzOPs3CILUOjboRIEs4S&noverify=0&personal_qrcode_source=3",
      },
    ],
    // 主页nav列表
    nav: [
      { text: "文档库", link: "/sidebar/about/home" },
      { text: "关于我", link: "/sidebar/about/me" },
      {
        text: "企鹅",
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=kRGTs5DaGA28XzOPs3CILUOjboRIEs4S&noverify=0&personal_qrcode_source=3",
      },
    ],
    // 内容页侧边栏导航配置
    sidebar: [
      {
        text: "ABOUT ME",
        items: [
          { text: "VitePress Md基本应用", link: "/sidebar/about/home" },
          { text: "介绍", link: "/sidebar/about/me" },
        ],
      },
      {
        text: "FRONTEND",
        items: [
          { text: "HTML", link: "/sidebar/frontend/html" },
          { text: "CSS", link: "/sidebar/frontend/css" },
          { text: "ECMAScript", link: "/sidebar/frontend/ecmascript" },
          { text: "TypeScript", link: "/sidebar/frontend/typescript" },
          { text: "HTTP", link: "/sidebar/frontend/http" },
          { text: "Vue", link: "/sidebar/frontend/vue" },
          { text: "React", link: "/sidebar/frontend/react" },
          { text: "Vite", link: "/sidebar/frontend/vite" },
        ],
      },
      {
        text: "BACKEND",
        items: [
          { text: "Nodejs", link: "/sidebar/backend/nodejs" },
          { text: "Express", link: "/sidebar/backend/express" },
          { text: "Mysql", link: "/sidebar/backend/mysql" },
          { text: "Prisma", link: "/sidebar/backend/prisma" },
        ],
      },
      {
        text: "OTHER",
        items: [
          { text: "Git", link: "/sidebar/other/git" },
          { text: "Github", link: "/sidebar/other/github" },
          { text: "I-Algorithms", link: "/sidebar/other/i-algorithms" },
        ],
      },
      {
        text: "LINUX-UBUNTU",
        items: [
          {
            text: "Ubuntu修改终端语言",
            link: "/sidebar/linux-ubuntu/change-lang",
          },
        ],
      },
    ],
    // 主页的页脚配置
    footer: {
      copyright: "Copyright © 2019-present fengji",
    },
  },
  // 启用markdown的行号显示
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
};

export default config;

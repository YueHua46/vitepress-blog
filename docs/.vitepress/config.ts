import { defineConfig } from "vitepress";
import nav from "../config/nav";
import socialLinks from "../config/socialLinks";

// tools
import sidebarTools from "../config/sidebarTools/sidebarTools";
// about
import sidebarAbout from "../config/sidebarAbout/sidebarAbout";
// document
import sidebarBackend from "../config/sidebarDocument/sidebarBackend";
import sidebarFrontend from "../config/sidebarDocument/sidebarFrontend";
import sidebarLinux from "../config/sidebarDocument/sidebarLinux";
import sidebarOther from "../config/sidebarDocument/sidebarOther";

export default defineConfig({
  base: "/",
  // cleanUrls: "with-subfolders",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://resource-1314318362.cos.ap-shanghai.myqcloud.com/imgs/favicon.ico",
      },
    ],
  ],
  // 是否允许切换dark模式（默认允许）
  appearance: true,
  // 语言
  lang: "zh-CN",
  // 应用标题
  title: "YueHua",
  description: "Yuehua Blog",
  //   是否展示最后更新
  lastUpdated: true,
  // 打包输出目录
  outDir: "../website",
  // 主页配置
  themeConfig: {
    // search
    algolia: {
      appId: "S6GKVSL2B7", // 需要替换
      apiKey: "73ef51e5a88847268064f0ea81087ecd", // 需要替换
      indexName: "yuehua", // 需要替换
      placeholder: "请输入关键词",
      buttonText: "搜索",
    },
    siteTitle: "HOME",
    // 主页logo
    logo: "https://vitejs.dev/logo-with-shadow.png",
    // 内容页右边大纲的标题
    outlineTitle: "索引",
    // 最后更新文本：
    lastUpdatedText: "最后更新于",
    // 配置文件大纲的级别，2和3表示分别对应Markdown的##和###级别
    outline: [2, 3],
    // 自定义文档页脚的上/下页文本内容
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 社交链接
    socialLinks,
    // 主页nav列表
    nav,
    // 内容页侧边栏导航配置
    sidebar: {
      "/sidebar/about/": sidebarAbout,
      "/sidebar/tools/": sidebarTools,
      "/sidebar/document/frontend/": sidebarFrontend,
      "/sidebar/document/backend/": sidebarBackend,
      "/sidebar/document/linux/": sidebarLinux,
      "/sidebar/document/other/": sidebarOther,
    },
    // 主页的页脚配置
    footer: {
      copyright: "Copyright © 2019-present fengji",
    },
  },

  markdown: {
    theme: "material-palenight",
    // 是否启用markdown的行号显示
    lineNumbers: false,
  },
});

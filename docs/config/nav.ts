export default [
  {
    text: "📓文档库",
    activeMatch: "/sidebar/document/",
    items: [
      {
        text: "前端",
        link: "/sidebar/document/frontend/html-css-js/shadowDOM_customHTML",
      },
      {
        text: "后端",
        link: "/sidebar/document/backend/nginx/nginx",
      },
      {
        text: "其他",
        link: "/sidebar/document/other/git-github/github",
      },
      {
        text: "Linux",
        link: "/sidebar/document/linux/ubuntu-command",
      },
    ],
  },
  {
    text: "⚙️ 工具库",
    activeMatch: "/sidebar/tools/",
    items: [
      {
        text: "工具1",
        link: "/sidebar/tools/tools-type1/test1",
      },
      {
        text: "工具2",
        link: "/sidebar/tools/tools-type2/test1",
      },
    ],
  },
  {
    text: "🥰 关于我",
    link: "/sidebar/about/me",
    activeMatch: "/sidebar/about/",
  },
];

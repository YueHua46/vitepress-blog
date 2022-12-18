export default [
  {
    text: "文档库",
    items: [
      {
        text: "前端",
        link: "/sidebar/document/frontend/html-css-js/html",
        activeMatch: "/sidebar/document/frontend/",
      },
      {
        text: "后端",
        link: "/sidebar/document/backend/nodejs/test1",
        activeMatch: "/sidebar/document/backend/",
      },
      {
        text: "其他",
        link: "/sidebar/document/other/git-github/github",
        activeMatch: "/sidebar/document/other/",
      },
      {
        text: "Linux",
        link: "/sidebar/document/linux/ubuntu-command",
        activeMatch: "/sidebar/document/linux/",
      },
    ],
  },
  {
    text: "工具库",
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
    text: "关于我",
    link: "/sidebar/about/home",
    activeMatch: "/sidebar/about/",
  },
];

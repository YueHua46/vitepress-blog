import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import YueLayout from "./components/YueLayout.vue";

const theme: Theme = {
  ...DefaultTheme,
  Layout: YueLayout,
};

export default theme;

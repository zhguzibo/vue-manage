import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import setupPlugin from "vite-plugin-vue-setup-extend"; // eslint自动检测

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin({ include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"] }),
    // name 可以写在 script 标签上
    setupPlugin({})
  ];
};

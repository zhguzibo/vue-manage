import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 引入路由
import router from "@/routers";
// 引入模板全局的样式
import "@/styles/index.scss";
// 引入pinia
import pinia from "@/stores";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn // ElementPlus国际化配置
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 注册模板路由
app.use(router);
app.use(pinia);
app.mount("#app");

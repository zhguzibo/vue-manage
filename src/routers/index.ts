import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter, errorRouter } from "@/routers/modules/staticRouter";
const router = createRouter({
  // 路由模式——hash
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
  // 滚动行为
  scrollBehaviour() {
    return {
      left: 0,
      height: 0
    };
  }
});

export default router;

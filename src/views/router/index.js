import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    title: "文档格式参考Demo",
    component: Home
  },
  {
    path: "/chart",
    name: "chart",
    title: "chart",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "chart" */ "../pages/chart.vue")
  },
  {
    path: "/scroll",
    name: "scroll",
    title: "scroll",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "scroll" */ "../pages/scroll.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
export { routes };

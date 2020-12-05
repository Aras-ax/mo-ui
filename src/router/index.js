import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    title: "文档格式参考Demo",
    component: Home
  },
  {
    path: "/layout",
    name: "layout",
    title: "栅格布局",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "layout" */ "../views/pages/layoutPage.vue")
  },
  {
    path: "/scroll",
    name: "scroll",
    title: "滚动条",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "scroll" */ "../views/pages/scrollPage.vue")
  },
  {
    path: "/chart-line",
    name: "chart-line",
    title: "折线图",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "chart-line" */ "../views/pages/chart-linePage.vue")
  },
  {
    path: "/chart-bar",
    name: "chart-bar",
    title: "柱图",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "chart-bar" */ "../views/pages/chart-barPage.vue")
  },
  {
    path: "/chart-pie",
    name: "chart-pie",
    title: "饼图",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "chart-pie" */ "../views/pages/chart-piePage.vue")
  },
  {
    path: "/chart-percent",
    name: "chart-percent",
    title: "百分比图",
    // eslint-disable-next-line prettier/prettier
    component: () => import(/* webpackChunkName: "chart-percent" */ "../views/pages/chart-percentPage.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
export { routes };

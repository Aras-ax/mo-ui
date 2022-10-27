import Line from "./chart-line.vue";

Line.install = function install(Vue) {
  Vue.component(Line.name, Line);
};

export default Line;

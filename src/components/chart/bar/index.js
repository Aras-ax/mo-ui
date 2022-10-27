import Bar from "./chart-bar.vue";

Bar.install = function install(Vue) {
  Vue.component(Bar.name, Bar);
};

export default Bar;

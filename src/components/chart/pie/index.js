import Pie from "./pie.vue";

Pie.install = function install(Vue) {
  Vue.component(Pie.name, Pie);
};

export default Pie;

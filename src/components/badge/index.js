import Badge from "./badge.vue";

Badge.install = function install(Vue) {
  Vue.component(Badge.name, Badge);
};

export default Badge;

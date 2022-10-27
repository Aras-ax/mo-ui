import Container from "./container.vue";

Container.install = function install(Vue) {
  Vue.component(Container.name, Container);
};

export default Container;

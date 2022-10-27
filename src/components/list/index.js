import List from "./list.vue";

/* istanbul ignore next */
List.install = function(Vue) {
  Vue.component(List.name, List);
};

export default List;

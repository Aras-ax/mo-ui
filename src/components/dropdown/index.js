import Dropdown from "./dropdown.vue";

/* istanbul ignore next */
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown;

import Input from "./input.vue";
import InputGroup from "./input-group.vue";
import InputNumber from "./input-number.vue";

/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
  Vue.component(InputGroup.name, InputGroup);
  Vue.component(InputNumber.name, InputNumber);
};

export default Input;
export { Input, InputGroup, InputNumber };

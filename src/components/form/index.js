import Form from "./form.vue";
import FormItem from "./form-item.vue";
/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
};

export default Form;
export { Form, FormItem };

import Step from "../steps/step.vue";

/* istanbul ignore next */
Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

export default Step;

import Step from "./step.vue";
import Steps from "./steps.vue";

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Step.name, Step);
  Vue.component(Steps.name, Steps);
};

export default Steps;

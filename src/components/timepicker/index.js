import TimePicker from "./timepicker.vue";

/* istanbul ignore next */
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;

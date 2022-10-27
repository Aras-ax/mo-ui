import Tabs from "./tabs.vue";
import TabPane from "./tab-pane.vue";

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabPane.name, TabPane);
};

export default Tabs;
export { TabPane };

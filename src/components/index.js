import "../scss/index.scss";

/*全局组件*/
import Collapse from "./collapse";
import Row from "./layout";
import Col from "./layout/colIndex";
import Scroll from "./scroll";
import { XScroll } from "./scroll";

import Bar from "./chart/bar";
import Line from "./chart/line";
import Pie from "./chart/pie";
import Percent from "./chart/percent";

const components = [
  Collapse,
  Row,
  Col,
  Scroll,
  XScroll,
  Bar,
  Line,
  Pie,
  Percent
];

const install = function(Vue) {
  window.Vue = Vue;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Collapse
};

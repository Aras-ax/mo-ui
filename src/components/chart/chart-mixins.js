import { isObject, isArray, isUndefinedOrNull } from "../libs";
import { DEFAULT_COLORS } from "./chart-lib";

export default {
  props: {
    series: {
      type: Array,
      required: true,
      validator(val) {
        if (val.length === 0) {
          return true;
        }
        let item = val[0];
        return (
          isObject(item) &&
          !isUndefinedOrNull(item["name"]) &&
          isArray(item["data"])
        );
      }
    },
    categories: {
      type: Array,
      required: true
    },
    legend: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "square"].indexOf(val) > -1;
      }
    },
    colors: {
      type: Array,
      default() {
        return DEFAULT_COLORS;
      }
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    isOffset: {
      type: Boolean,
      default: true
    },
    title: String,
    comment: String
  },
  computed: {
    legends() {
      return this.series.map(item => item.name);
    }
  }
};

export const ChartProps = {
  props: {
    showTip: {
      type: Boolean,
      default: true
    },
    tipText: String,
    animation: {
      type: Boolean,
      default: true
    }
  }
};

export const BarLineMixin = {
  computed: {
    legendColor() {
      return this.$refs.chartbase ? this.$refs.chartbase.legendColor : {};
    }
  },
  methods: {
    getAxis() {
      if (this.$refs.chartbase) {
        let axis = this.$refs.chartbase.axis;
        return axis.getAxis();
      }
    },
    // 获取图表容器的offsetLeft和Top
    getContainerOffset() {
      if (this.containerOffset) {
        return this.containerOffset;
      } else {
        return (this.containerOffset = {
          x: this.$refs.chartbase.$el.offsetLeft,
          y: this.$refs.chartbase.$el.offsetTop
        });
      }
    },
    refresh(data) {
      this.update();
      this.$emit("legendClick", data);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.update();
    });
  }
};

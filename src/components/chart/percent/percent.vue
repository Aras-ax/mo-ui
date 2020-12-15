<template>
  <section class="mo-chart__percent">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        v-if="type === 'circle'"
        name="circle"
        :class="{ 'mo-chart__percent__circle': mounted }"
      >
        <circle
          name="back"
          :cx="center.x"
          :cy="center.y"
          :r="center.r"
          :stroke="backColor[activeIndex % backColor.length]"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <circle
          name="back"
          :cx="center.x"
          :cy="center.y"
          :r="center.r"
          :stroke="colors[activeIndex % colors.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="dashArray"
          fill="none"
          class="dash-animate"
        ></circle>
      </g>
      <g v-else name="bar">
        <line
          name="back"
          :x1="center.x"
          :x2="center.x + center.r"
          :y1="center.y"
          :y2="center.y"
          :stroke="backColor[activeIndex % backColor.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
        ></line>
        <line
          name="line"
          :x1="center.x"
          :x2="center.x + center.r"
          :y1="center.y"
          :y2="center.y"
          :stroke="colors[activeIndex % colors.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="dashArray"
          class="dash-animate"
        ></line>
      </g>
    </svg>
    <div
      class="mo-chart__percent__detail"
      :class="{ line: !isCircle }"
      :style="{ width: `${detailWidth}px` }"
    >
      <slot>
        <div class="mo-chart__percent__detail__value">
          {{ value | percent }}
        </div>
        <div class="mo-chart__percent__detail__text" v-if="title">
          {{ title }}
        </div>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "mo-chart-percent",
  props: {
    type: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "line"].indexOf(val) > -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    title: String,
    colors: {
      type: Array,
      default() {
        return ["#ace06f"];
      }
    },
    colorValue: {
      type: Array,
      default() {
        return [1];
      }
    },
    backColor: {
      type: Array,
      default() {
        return ["#f5f5f5"];
      }
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    padding: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    this.detailHeight = 34;
    return {
      renderWidth: this.width,
      renderHeight: this.height,
      mounted: false,
      startAnimate: false,
      dashArray: "0,3000",
      initValue: this.value,
      center: {
        x: 0,
        y: 0,
        r: 0
      }
    };
  },
  computed: {
    perimeter() {
      if (this.isCircle) {
        return Math.PI * 2 * (this.center.r || 0);
      }
      return this.center.r;
    },
    activeIndex() {
      for (let i = 0; i < this.colorValue.length; i++) {
        if (this.value <= this.colorValue[i]) {
          return i;
        }
      }
      return 0;
    },
    isCircle() {
      return this.type === "circle";
    },
    detailWidth() {
      if (this.isCircle) {
        return this.center.r * 2;
      }
      return this.center.r;
    }
  },
  watch: {
    value() {
      let perimeter = this.perimeter;
      this.dashArray = `${this.value * perimeter}, ${perimeter}`;
    }
  },
  filters: {
    percent(val) {
      return (val * 100).toFixed(0) + "%";
    }
  },
  methods: {
    calculate() {
      if (this.type === "circle") {
        this.calculateCircle();
      } else {
        this.calculateBar();
      }
      // 解决初始动画卡顿问题
      setTimeout(() => {
        this.dashArray = `${this.value * this.perimeter},${this.perimeter}`;
      }, 200);
    },
    calculateCircle() {
      let width = this.renderWidth;
      let height = this.renderHeight;
      let { center, padding } = this;

      width -= padding * 2;
      height -= padding * 2;
      center.x = padding + Math.floor(width / 2);
      center.y = padding + Math.floor(height / 2);
      center.r = Math.floor((width < height ? width : height) / 2);
      this.mounted = true;
    },
    calculateBar() {
      let width = this.renderWidth;
      let height = this.renderHeight;
      let { center, padding } = this;

      width -= padding * 2;
      center.x = padding;
      center.y = Math.floor((height + this.detailHeight) / 2);
      center.r = width;
    }
  },
  mounted() {
    this.renderWidth = this.width || this.$el.clientWidth;
    this.renderHeight = this.height || this.$el.parentNode.clientHeight;
    this.calculate();
  }
};
</script>

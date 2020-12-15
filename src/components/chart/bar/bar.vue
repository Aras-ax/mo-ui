<template>
  <chart-base
    ref="chartbase"
    class="mo-chart-bar"
    :isOffset="true"
    :title="title"
    :comment="comment"
    :height="height"
    :width="width"
    :series="series"
    :categories="categories"
    :legend="legend"
    @change="refresh"
    @mousemove.native="hover"
    @mouseleave.native="leave"
  >
    <g name="bar">
      <rect
        v-for="(t, i) in animateBarList"
        :key="i"
        :x="t.x"
        :y="t.y"
        :width="t.width"
        :height="t.height"
        :fill="legendColor[t.legend]"
        stroke="none"
        stroke-width="0"
      ></rect>
    </g>
    <!-- <transition name="fade"> -->
    <g name="value" v-if="showValue && animatePercent === 1">
      <text
        v-for="(t, i) in barList"
        :x="t.x + t.width / 2"
        :y="t.y - 3"
        font-size="12"
        fill="#565656"
        text-anchor="middle"
        :key="i"
        >{{ t.value | format }}
      </text>
    </g>
    <!-- </transition> -->

    <transition name="fade">
      <rect
        name="tip-shadow"
        v-if="tipIndex > -1"
        :x="shadowX"
        :y="axis.yStart"
        :width="shadowWidth"
        :height="axis.yHeight"
        fill="rgba(0,0,0,0.1)"
        @click="click"
      ></rect>
    </transition>
    <template v-slot:tip>
      <transition name="fade">
        <div
          class="mo-chart__tip"
          v-if="showTip && tipIndex > -1"
          :style="tipStyle"
        >
          <div v-if="tipText">{{ tipText }}</div>
          <div>{{ barList[tipIndex].legend }}</div>
          <div class="mo-chart__tip__data">
            <i
              class="mo-chart__tip__data__point"
              :style="{ background: legendColor[barList[tipIndex].legend] }"
            ></i>
            <span>{{ barList[tipIndex].value | format }}</span>
          </div>
        </div>
      </transition>
    </template>
  </chart-base>
</template>

<script>
import ChartBase from "../chart-base.vue";
import mixin, { BarLineMixin, ChartProps } from "../chart-mixins";
import {
  TIP_OFFSET_TOP,
  TIP_OFFSET_HORIZONTAL,
  BAR_CONFIG
} from "../chart-lib";
import tween from "../../easing-function";

export default {
  name: "mo-chart-bar",
  mixins: [mixin, BarLineMixin, ChartProps],
  props: {
    showValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.axis = {};
    this.oldBars = {};

    return {
      animatePercent: this.hasAnimation ? 0 : 1,
      barList: [],
      animateBarList: [],
      barCfg: {
        offset: 0,
        barWidth: 0
      },
      tip: {
        x: 0,
        y: 0
      },
      shadowX: 0,
      shadowWidth: 0,
      tipIndex: -1,
      // 当前选中的category索引
      categoryIndex: 0
    };
  },
  filters: {
    format(data) {
      data = Number(data);
      if ((data | 0) == data) {
        return data | 0;
      }
      return data.toFixed(2);
    }
  },
  watch: {
    barList(barList) {
      if (!this.hasAnimation) {
        this.animateBarList.splice(0, this.animateBarList.length, ...barList);
        return;
      }

      this.animatePercent = 0;
      let remove = false;
      tween(
        0,
        1,
        state => {
          let list = [],
            oldBars = this.oldBars,
            cloneOldBars = Object.assign({}, oldBars);
          barList.forEach(bar => {
            let key = `${bar.legend}-${bar.category}`;
            let oldBar = oldBars[key];
            list.push(
              Object.assign(
                {},
                bar,
                oldBar
                  ? {
                      x: oldBar.x + state * (bar.x - oldBar.x),
                      y: oldBar.y + state * (bar.y - oldBar.y),
                      width: oldBar.width + state * (bar.width - oldBar.width),
                      height:
                        oldBar.height + state * (bar.height - oldBar.height)
                    }
                  : {
                      x: bar.x,
                      y: bar.y + (1 - state) * bar.height,
                      width: state * bar.width,
                      height: state * bar.height
                    }
              )
            );
            if (oldBar) {
              delete cloneOldBars[key];
            }
          });
          for (let key in cloneOldBars) {
            remove = true;
            let oldBar = oldBars[key];
            list.unshift(
              Object.assign({}, oldBar, {
                x: oldBar.x + (state * oldBar.width) / 2,
                y: oldBar.y + state * oldBar.height,
                width: (1 - state) * oldBar.width,
                height: (1 - state) * oldBar.height
              })
            );
          }

          this.animateBarList.splice(0, this.animateBarList.length, ...list);
        },
        500,
        this.animation
      ).then(() => {
        this.animatePercent = 1;
        remove && this.animateBarList.splice(0, this.categories.length);
      });
    }
  },
  computed: {
    tipStyle() {
      let res = { top: `${this.tip.y - TIP_OFFSET_TOP}px` };
      let isLeft = this.tipIndex > this.barList.length / 2;
      let left = this.tip.x + TIP_OFFSET_HORIZONTAL,
        translateX = "0";
      if (isLeft) {
        left -= TIP_OFFSET_HORIZONTAL * 2;
        translateX = "-100%";
      }

      res["left"] = `${left}px`;
      res["-webkit-transform"] = `translate(${translateX}, 0)`;
      res["-ms-transform"] = `translate(${translateX}, 0)`;
      res["transform"] = `translate(${translateX}, 0)`;

      return res;
    }
  },
  components: { ChartBase },
  methods: {
    update() {
      this.axis = this.getAxis();
      this.draw();
    },
    draw() {
      this.getBarWidth();
      let { categories, axis, barCfg } = this;
      let { xLabelWidth, xStart, yEnd } = axis;

      let list = [],
        seriesLen = this.$refs.chartbase.chartSeries.length;
      this.cacheBar();

      this.$refs.chartbase.chartSeries.forEach((item, i) => {
        item.data.forEach((data, j) => {
          let h = this.toSize(data);
          list[j * seriesLen + i] = {
            x:
              xStart +
              barCfg.offset +
              j * xLabelWidth +
              i * (barCfg.barWidth + BAR_CONFIG.barGap),
            y: yEnd - h,
            width: barCfg.barWidth,
            height: h,
            value: data,
            legend: item.name,
            category: categories[j]
          };
        });
      });
      this.barList.splice(0, this.barList.length, ...list);
    },
    cacheBar() {
      let res = {};
      this.barList.forEach(item => {
        res[`${item.legend}-${item.category}`] = item;
      });
      this.oldBars = res;
    },
    getBarWidth() {
      let { xLabelWidth } = this.axis;
      let len = this.$refs.chartbase.chartSeries.length;
      let perBarWidth =
        (xLabelWidth - (len - 1) * BAR_CONFIG.barGap) / (len + 1);
      perBarWidth = Math.floor(perBarWidth);
      if (perBarWidth > BAR_CONFIG.MAX_WIDTH) {
        perBarWidth = BAR_CONFIG.MAX_WIDTH;
      }

      this.barCfg.barWidth = perBarWidth;
      this.barCfg.offset =
        (xLabelWidth - perBarWidth * len - (len - 1) * BAR_CONFIG.barGap) / 2;
    },
    toSize(val) {
      let { min, range, yHeight } = this.axis,
        data = val - min;
      return Math.floor((data / range) * yHeight);
    },
    click() {
      let data = this.barList[this.tipIndex];
      this.$emit("click", {
        value: data.value,
        legend: data.legend,
        category: data.category
      });
    },
    hover(e) {
      let { xStart, xEnd, yStart, yEnd, xLabelWidth } = this.axis;
      let offset = this.getContainerOffset();
      let x = e.pageX - offset.x;
      let y = e.pageY - offset.y;
      // 不在折线的绘制区域内则不作任何处理
      if (x < xStart || x > xEnd || y < yStart || y > yEnd) {
        this.tipIndex = -1;
        return;
      }

      let categoryIndex = 0;

      // 记录tip的x、y轴坐标
      this.tip.x = x;
      this.tip.y = y;

      x -= xStart;
      let percentage = x / xLabelWidth;
      // 鼠标在最末尾
      if (percentage === this.categories.length) {
        this.tipIndex = -1;
        return;
      }
      this.categoryIndex = categoryIndex = ~~percentage;
      percentage -= categoryIndex;

      let width = x - xLabelWidth * categoryIndex;
      if (width < this.barCfg.offset) {
        this.tipIndex = -1;
        return;
      }
      width -= this.barCfg.offset;
      let index = ~~(width / (this.barCfg.barWidth + BAR_CONFIG.barGap)),
        len = this.$refs.chartbase.chartSeries.length;
      if (categoryIndex >= this.categories.length || index >= len) {
        this.tipIndex = -1;
        return;
      }
      this.tipIndex = categoryIndex * len + index;

      this.shadowX = this.barList[this.tipIndex].x - BAR_CONFIG.barGap / 2;
      this.shadowWidth = this.barCfg.barWidth + BAR_CONFIG.barGap;
    },
    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    }
  }
};
</script>

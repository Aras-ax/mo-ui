<template>
  <chart-base
    ref="chartbase"
    class="v-chart-line"
    :isOffset="isOffset"
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
    <g :name="t.legend" v-for="(t, i) in lineList" :key="i">
      <path
        :d="t.d"
        :stroke="legendColor[t.legend]"
        stroke-width="1.5"
        fill="none"
      ></path>
      <template v-if="showPoint">
        <circle
          v-for="circle in points[i]"
          :key="circle.x"
          :cx="circle.x"
          :cy="circle.y"
          r="2"
          :fill="legendColor[t.legend]"
        ></circle>
      </template>
    </g>
    <transition name="fade">
      <g v-if="showTip && tipIndex > -1">
        <line
          :x1="hoverX"
          :y1="axis.yStart"
          :x2="hoverX"
          :y2="axis.yEnd"
          stroke-width="1"
          stroke="#838383"
          shape-rendering="crispEdges"
          stroke-dasharray="0"
        ></line>
        <circle
          v-for="(circle, i) in hoverPoints"
          :key="i"
          :cx="circle.x"
          :cy="circle.y"
          r="3.5"
          stroke-width="2"
          stroke="#fff"
          :fill="legendColor[circle.legend]"
        ></circle>
      </g>
    </transition>
    <template v-slot:tip>
      <transition name="fade">
        <div
          class="v-chart__tip"
          v-if="showTip && tipIndex > -1"
          :style="tipStyle"
        >
          <div>{{ categories[tipIndex] }}</div>
          <div
            class="v-chart__tip__data"
            v-for="(item, i) in hoverPoints"
            :key="i"
          >
            <i
              class="v-chart__tip__data__point"
              :style="{ background: legendColor[item.legend] }"
            ></i>
            <span>{{ item.data }}</span>
          </div>
        </div>
      </transition>
    </template>
  </chart-base>
</template>

<script>
import ChartBase from "../chart-base.vue";
import mixin, { BarLineMixin, ChartProps } from "../chart-mixins";
import { BezierCurve } from "../chart-lib";
import { TIP_OFFSET_TOP, TIP_OFFSET_HORIZONTAL } from "../chart-lib";

export default {
  name: "v-chart-line",
  mixins: [mixin, BarLineMixin, ChartProps],
  data() {
    this.axis = {};
    return {
      lineList: [],
      points: [],
      tipIndex: -1,
      hoverX: 0,
      tipY: 0,
      hoverPoints: []
    };
  },
  props: {
    type: {
      type: [String, Number],
      default: 2
    },
    showPoint: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tipStyle() {
      let res = {
        top: this.tipY - TIP_OFFSET_TOP + "px"
      };

      let translateX = "0",
        left = this.hoverX + TIP_OFFSET_HORIZONTAL;
      if (this.tipIndex > (this.categories.length - 1) / 2) {
        translateX = "-100%";
        left -= TIP_OFFSET_HORIZONTAL * 2;
      }

      res["left"] = `${left}px`;
      res["-webkit-transform"] = `translate(${translateX}, 0)`;
      res["-ms-transform"] = `translate(${translateX}, 0)`;
      res["transform"] = `translate(${translateX}, 0)`;

      return res;
    }
  },
  watch: {
    tipIndex(val) {
      if (val === -1) {
        return;
      }
      this.hoverPoints.splice(
        0,
        this.hoverPoints.length,
        ...this.points.map(item => item[val])
      );
      if (this.axis) {
        let { xLabelWidth, xStart } = this.axis;
        this.hoverX =
          xStart + val * xLabelWidth + (this.isOffset ? xLabelWidth / 2 : 0);
      }
    }
  },
  components: { ChartBase },
  methods: {
    update() {
      this.axis = this.getAxis();
      this.draw();
    },
    draw() {
      this.lineList.splice(0);
      this.points.splice(0);
      let { xLabelWidth, xStart, yStart, range, min, yHeight } = this.axis;
      this.$refs.chartbase.chartSeries.forEach(item => {
        let offset = xStart + (this.isOffset ? xLabelWidth / 2 : 0),
          d = `M${offset}`,
          points = [];

        item.data.forEach((data, j) => {
          let y = Math.floor(yStart + yHeight * (1 - (data - min) / range));

          if (j === 0) {
            d += ` ${y}`;
          } else {
            offset += xLabelWidth;
            d += ` L${offset} ${y}`;
          }
          points.push({ x: offset, y, data, legend: item.name });
        });
        this.points.push(points);
        // 绘制曲线
        if (this.type == 2) {
          d = this.getPath(points);
        }
        this.lineList.push({
          d: d,
          legend: item.name
        });
      });
    },
    getPath(points) {
      let cps = [];
      for (var i = 0; i < points.length - 2; i += 1) {
        cps = cps.concat(
          BezierCurve.getControlPoints(
            points[i].x,
            points[i].y,
            points[i + 1].x,
            points[i + 1].y,
            points[i + 2].x,
            points[i + 2].y
          )
        );
      }
      return BezierCurve.drawCurvedPath(cps, points);
    },
    hover(e) {
      if (!this.showTip) {
        return;
      }

      let offset = this.getContainerOffset();
      let { xStart, xEnd, yStart, yEnd, xLabelWidth } = this.axis;
      let x = e.pageX - offset.x;
      let y = e.pageY - offset.y;
      // 不在折线的绘制区域内则不作任何处理
      if (x < xStart || x > xEnd || y < yStart || y > yEnd) {
        this.tipIndex = -1;
        return;
      }

      let i = 0,
        offsetPercent = 1 - (this.isOffset ? 0.5 : 1);
      x -= xStart;
      this.tipY = y;

      let percentage = x / xLabelWidth;
      for (i = 0; i < this.categories.length; i++) {
        if (percentage > i + offsetPercent) {
          continue;
        }
        break;
      }
      if (i === this.categories.length) {
        i--;
      }
      this.tipIndex = i;
    },
    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    }
  }
};
</script>

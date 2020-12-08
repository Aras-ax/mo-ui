<template>
  <section class="mo-chart mo-chart-pie" @mousemove="hover">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text name="title" x="0" :y="titleY" v-if="title" class="mo-chart__title">
        {{ title }}
      </text>
      <g name="pie">
        <path
          stroke="#fff"
          stroke-width="3"
          v-for="path in paths"
          :key="path.start"
          :d="
            `M${path.start} A ${path.r} ${path.r}, 0, ${
              path.percent > 0.5 ? 1 : 0
            }, 1, ${path.end} L ${center.x} ${center.y} Z`
          "
          :fill="path.fill"
        />
      </g>
      <g name="lines">
        <g v-for="point in points" :key="point.name" :name="point.name">
          <path
            :d="
              `M${point.start.x} ${point.start.y} Q${point.center.x} ${point.center.y}, ${point.end.x} ${point.end.y}`
            "
            :stroke="point.stroke"
            stroke-width="1.5"
            fill="none"
          ></path>
          <text
            :x="point.end.x + (point.isLeft ? -4 : 4)"
            :y="point.end.y + 6"
            :fill="point.stroke"
            :text-anchor="point.isLeft ? 'end' : 'start'"
            font-size="12"
          >
            {{ point.percent | percent }}
          </text>
        </g>
      </g>
      <text
        name="comment"
        x="100%"
        :y="commentY"
        v-if="comment"
        class="mo-chart__comment"
        text-anchor="end"
      >
        {{ comment }}
      </text>

      <!-- <transition name="fade"> -->
      <g v-if="showTip && tipIndex > -1">
        <path
          stroke="#fff"
          stroke-width="3"
          :d="
            `M${tipArc[1].start} A ${tipArc[1].r} ${tipArc[1].r}, 0, ${
              tipArc[1].percent > 0.5 ? 1 : 0
            }, 1, ${tipArc[1].end} L ${center.x} ${center.y} Z`
          "
          :fill="tipArc[1].fill"
        />
        <path
          stroke="#fff"
          stroke-width="3"
          :d="
            `M${tipArc[0].start} A ${tipArc[0].r} ${tipArc[0].r}, 0, ${
              tipArc[0].percent > 0.5 ? 1 : 0
            }, 1, ${tipArc[0].end} L ${center.x} ${center.y} Z`
          "
          fill="#fff"
        />
      </g>
      <!-- </transition> -->
    </svg>
    <!-- legends -->
    <mo-chart-legend
      :style="{ bottom: `${legendY}px` }"
      :legends="categories"
      :legendColor="legendColor"
      :hideLegends="hideLegends"
      @change="change"
    ></mo-chart-legend>
    <!-- tool tip -->
    <transition name="fade">
      <div
        class="mo-chart__tip"
        v-if="showTip && tipIndex > -1"
        :style="{ top: tip.y + 'px', left: tip.x + 'px' }"
      >
        <div>{{ points[tipIndex].name }}</div>
        <div class="mo-chart__tip__data">
          <i
            class="mo-chart__tip__data__point"
            :style="{ background: points[tipIndex].stroke }"
          ></i>
          <span>{{ points[tipIndex].percent | percent }}</span>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import MoChartLegend from "../legend.vue";
import mixin, { ChartProps } from "../chart-mixins";
import { CHARTBASE_CONFIG } from "../chart-lib";
import { SvgHandle } from "../axis";

const DESC_OFFSET = 16;

export default {
  name: "mo-chart-pie",
  mixins: [mixin, ChartProps],
  props: {
    series: {
      type: Array,
      required: true
    }
  },
  data() {
    let svgHandle = new SvgHandle();
    this.svgHeight = svgHandle.getTextHeight();
    this.dataObject = {};
    this.showCates = [];
    this.cfg = {
      circleWidth: 18,
      offset: 4
    };
    return {
      paths: [],
      points: [],
      hideLegends: {},
      tipIndex: -1,
      tip: {
        x: 0,
        y: 0
      },
      center: {
        x: 0,
        y: 0,
        r: 0
      },
      renderWidth: this.width,
      renderHeight: this.height
    };
  },
  components: {
    MoChartLegend
  },
  computed: {
    // legend在Y轴的位置
    titleY() {
      return this.title
        ? (CHARTBASE_CONFIG.title.height - CHARTBASE_CONFIG.title.fontsize) /
            2 +
            CHARTBASE_CONFIG.title.fontsize
        : 0;
    },
    // 注释在Y轴的位置
    commentY() {
      return this.comment
        ? this.renderHeight -
            (CHARTBASE_CONFIG.comment.height -
              CHARTBASE_CONFIG.comment.fontsize) /
              2
        : 0;
    },
    // 图例在Y轴的位置
    legendY() {
      return this.comment ? CHARTBASE_CONFIG.comment.height : 0;
    },
    legendColor() {
      let l = this.colors.length;
      return this.categories.reduce((obj, item, i) => {
        obj[item] = this.colors[i % l];
        return obj;
      }, {});
    },
    tipArc() {
      if (this.tipIndex === -1) {
        return;
      }
      let { x, y, r } = this.center;
      let { circleWidth, offset } = this.cfg;
      let { percent, endPercent, stroke } = this.points[this.tipIndex];
      return [
        {
          start: `${x +
            (r + offset - circleWidth) * this.sin(endPercent - percent)} ${y -
            (r + offset - circleWidth) * this.cos(endPercent - percent)}`,
          end: `${x + (r + offset - circleWidth) * this.sin(endPercent)} ${y -
            (r + offset - circleWidth) * this.cos(endPercent)}`,
          r: r + offset - circleWidth,
          fill: stroke,
          percent: percent
        },
        {
          start: `${x + (r + offset) * this.sin(endPercent - percent)} ${y -
            (r + offset) * this.cos(endPercent - percent)}`,
          end: `${x + (r + offset) * this.sin(endPercent)} ${y -
            (r + offset) * this.cos(endPercent)}`,
          r: r + offset,
          fill: stroke,
          percent: percent
        }
      ];
    }
  },
  filters: {
    percent(val) {
      return (val * 100).toFixed(2) + "%";
    }
  },
  methods: {
    format() {
      this.dataObject = this.categories.reduce((res, item, i) => {
        res[item] = {
          data: this.series[i],
          percent: 0
        };
        return res;
      }, {});
    },
    // 确定圆心和半径
    circleAndRadius() {
      let top = this.titleY;
      let height =
        this.renderHeight -
        top -
        (this.comment ? CHARTBASE_CONFIG.comment.height : 0) -
        CHARTBASE_CONFIG.legend.height;
      // 饼图占空余部分的2/3
      let r = (this.center.r = Math.floor((height * 2) / 3 / 2));
      this.center.x = Math.floor(this.renderWidth / 2);
      // 圆心Y坐标：top + r + 饼图上面空白部分的高
      this.center.y =
        top + r + Math.floor((height - r * 2) / 2 - this.cfg.offset / 2);
    },
    update() {
      this.renderWidth = this.width || this.$el.clientWidth;
      this.renderHeight = this.height || this.$el.parentNode.clientWidth;
      this.calculate();
      this.circleAndRadius();

      this.paths.splice(0);
      let points = [];
      // 圆上点坐标，起始方向为Y轴正方向，角度为a
      // x = 圆心横坐标x + r * sin(a)
      // y = 圆心Y坐标 - r * cos(a)
      let { x, y, r } = this.center;
      let circleWidth = this.cfg.circleWidth;
      let start = `${x} ${y - r}`,
        startInner = `${x} ${y - r + circleWidth}`,
        per = 0;
      this.showCates.forEach(name => {
        let { data, percent } = this.dataObject[name];
        per += percent;
        // 大扇形
        let end = `${x + r * this.sin(per)} ${y - r * this.cos(per)}`;
        this.paths.push({
          start,
          end,
          // value: data,
          // name,
          r,
          fill: this.legendColor[name],
          percent
        });
        start = end;
        // 小扇形
        let endInner = `${x + (r - circleWidth) * this.sin(per)} ${y -
          (r - circleWidth) * this.cos(per)}`;
        this.paths.push({
          start: startInner,
          end: endInner,
          // value: data,
          // name,
          r: r - circleWidth,
          fill: "#fff",
          percent
        });
        startInner = endInner;
        // 描述信息
        points.push(this.locateDesc(data, percent, per, name));
      });
      this.correctLocate(points);
      this.points.splice(0, this.points.length, ...points);
    },
    /**
     * 确定描述信息和线条的初始位置
     */
    locateDesc(data, percent, per, name) {
      let { x, y, r } = this.center;
      let rPoint = r + DESC_OFFSET;
      per = per - percent / 2;
      let sin = this.sin(per),
        cos = this.cos(per);
      let start = {
          x: x + r * sin,
          y: y - r * cos
        },
        center = {
          x: x + (r + 14) * sin,
          y: y - (r + 14) * cos
        },
        end = {
          x:
            x +
            (sin > 0 ? 1 : -1) *
              Math.sqrt(Math.pow(rPoint, 2) - Math.pow(center.y - y, 2)),
          y: center.y
        };
      return {
        start,
        center,
        end,
        percent,
        per,
        endPercent: per + percent / 2,
        stroke: this.legendColor[name],
        name,
        isLeft: per > 0.5,
        data
      };
    },
    /**
     * 修正位置信息。避免出现重叠和遮挡
     */
    correctLocate(points) {
      // 按左右划分，分别计算offset
      let quadrants = {
        left: [],
        right: []
      };
      // let quadrantsOffset = {};
      points.forEach(point => {
        if (point.per <= 0.5) {
          quadrants.right.push(point);
        } else {
          quadrants.left.push(point);
        }
      });
      // 分别修正饼图左右不分
      this.correctPoint(quadrants.right);
      this.correctPoint(quadrants.left.reverse());
    },
    /**
     * 同方向位置修正
     */
    correctPoint(points) {
      let { x, y, r } = this.center;
      let fontHeight = this.svgHeight - 2,
        offset = 0,
        lastY = 0,
        rOffset = r + DESC_OFFSET;
      // 从上到下逐个便宜
      points.forEach((point, i) => {
        let end = point.end;
        offset = end.y - lastY;
        if (offset > fontHeight) {
          lastY = end.y;
        } else {
          lastY = end.y += fontHeight - offset;
          if (rOffset - Math.abs(y - lastY) > 0) {
            end.x =
              x +
              (point.isLeft ? -1 : 1) *
                Math.sqrt(Math.pow(rOffset, 2) - Math.pow(lastY - y, 2));
          } else {
            if (point.isLeft && points[i - 1].end.x > end.x) {
              end.x = points[i - 1].end.x;
            } else if (!point.isLeft && points[i - 1].end.x < end.x) {
              end.x = points[i - 1].end.x;
            }
          }
        }
      });
      let topOffset = y - points[0].end.y - rOffset;
      let bottomOffset = points[points.length - 1].end.y - rOffset - y;
      if (bottomOffset > 0 && bottomOffset > topOffset) {
        let t = (bottomOffset - topOffset) / 2;
        if (t - bottomOffset > 0) {
          t = bottomOffset;
        }
        // 回位修正
        points.reverse().forEach((point, i) => {
          if (i === 0) {
            lastY = point.end.y -= t;

            return true;
          }
          offset = lastY - point.end.y;
          if (offset > fontHeight) {
            lastY = point.end.y;
          } else {
            lastY = point.end.y -= fontHeight - offset;
            if (rOffset - Math.abs(lastY - y) > 0) {
              point.end.x =
                x +
                (point.isLeft ? -1 : 1) *
                  Math.sqrt(Math.pow(rOffset, 2) - Math.pow(lastY - y, 2));
            }
          }
        });
      }
    },

    calculate() {
      let sum = 0,
        showCates = [];
      let { dataObject, hideLegends, categories } = this;
      categories.forEach(item => {
        if (!hideLegends[item]) {
          sum += dataObject[item].data;
          showCates.push(item);
        }
      });
      showCates.forEach(item => {
        dataObject[item].percent = dataObject[item].data / sum;
      });
      this.showCates = showCates;
    },

    sin(per) {
      return Math.sin(per * Math.PI * 2);
    },

    cos(per) {
      return Math.cos(per * Math.PI * 2);
    },

    sum(arr) {
      return arr.reduce((res, item) => res + item, 0);
    },

    refresh(legend) {
      // nextTick收集同时间多次refresh一次处理
      this.$nextTick(() => {
        this.update();
        legend && this.$emit("change", legend);
      });
    },

    change(item) {
      this.$set(this.hideLegends, item, !this.hideLegends[item]);
      this.refresh(item);
    },
    hover(e) {
      if (!this.showTip) {
        return;
      }

      let offset = this.getContainerOffset(),
        centerX = this.center.x,
        centerY = this.center.y,
        points = this.points,
        r = this.center.r,
        x = e.pageX - offset.x,
        y = e.pageY - offset.y;
      // 不在饼图的绘制区域内则不作任何处理
      if (Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2)) > r) {
        this.tipIndex = -1;
        return;
      }

      this.tip.x = x;
      this.tip.y = y;

      let angel = 0;
      if (x > centerX) {
        angel = Math.atan((x - centerX) / (centerY - y));
        if (angel < 0) {
          angel = Math.PI + angel;
        }
      } else {
        angel = Math.atan((centerX - x) / (centerY - y));
        if (angel > 0) {
          angel = Math.PI * 2 - angel;
        } else {
          angel = Math.PI - angel;
        }
      }
      let angelPercent = angel / Math.PI / 2;
      for (let i = 0, l = points.length; i < l; i++) {
        if (angelPercent <= points[i].endPercent) {
          this.tipIndex = i;
          return;
        }
      }
    },
    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    },
    getContainerOffset() {
      if (this.containerOffset) {
        return this.containerOffset;
      } else {
        return (this.containerOffset = {
          x: this.$el.offsetLeft,
          y: this.$el.offsetTop
        });
      }
    }
  },
  mounted() {
    this.format();
    this.update();
  }
};
</script>

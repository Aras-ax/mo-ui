<template>
  <section class="v-chart">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text name="title" x="0" :y="titleY" v-if="title" class="v-chart__title">
        {{ title }}
      </text>
      <g name="axis" ref="back"></g>
      <slot></slot>
      <text
        name="comment"
        x="100%"
        :y="commentY"
        v-if="comment"
        class="v-chart__comment"
        text-anchor="end"
      >
        {{ comment }}
      </text>
    </svg>
    <!-- legends -->
    <div
      class="v-chart__legends"
      :style="{ top: `${legendY}px`, right: `3px` }"
    >
      <label
        class="legend"
        v-for="item in legends"
        :key="item"
        @click.prevent.stop="change(item)"
      >
        <i
          :style="{
            background: hideLegends[item] ? '#ddd' : legendColor[item]
          }"
        ></i>
        <span :style="{ color: hideLegends[item] ? '#ddd' : 'inherit' }">{{
          item
        }}</span>
      </label>
    </div>
    <!-- tool tip -->
    <slot name="tip"></slot>
  </section>
</template>

<script>
import ChartAxis from "./axis";
import { CHARTBASE_CONFIG } from "./chart-lib";
import mixin from "./chart-mixins";

export default {
  mixins: [mixin],
  data() {
    // 图表的位置信息
    this.axis = new ChartAxis({
      categories: this.categories,
      series: this.series
    });

    return {
      hideLegends: {},
      renderWidth: this.width,
      renderHeight: this.height
    };
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
    // 图例在Y轴的位置
    legendY() {
      return (this.title ? CHARTBASE_CONFIG.title.height : 0) + 1;
    },
    // 注释在Y轴的位置
    commentY() {
      return this.comment
        ? this.renderHeight -
            (CHARTBASE_CONFIG.legend.height -
              CHARTBASE_CONFIG.legend.fontsize) /
              2
        : 0;
    },
    chartSeries() {
      return this.series.filter(item => !this.hideLegends[item.name]);
    },
    legendColor() {
      let l = this.series.length;
      return this.series.reduce((obj, item, i) => {
        obj[item.name] = this.colors[i % l];
        return obj;
      }, {});
    }
  },
  methods: {
    calcuate() {
      this.renderWidth = this.width || this.$el.clientWidth;
      this.renderHeight = this.height || this.$el.parentNode.clientWidth;

      this.axis.refresh({
        offsetGridLines: this.isOffset,
        categories: this.categories,
        series: this.chartSeries,
        hideLegends: this.hideLegends,
        renderWidth: this.renderWidth,
        renderHeight: this.renderHeight,
        start: this.legendY + CHARTBASE_CONFIG.legend.height,
        end:
          this.renderHeight -
          (this.comment ? CHARTBASE_CONFIG.comment.height : 0)
      });
      this.$refs.back.innerHTML = "";
      this.axis.draw(this.$refs.back);
    },
    refresh(legend) {
      // nextTick收集同时间多次refresh一次处理
      this.$nextTick(() => {
        this.calcuate();
        legend && this.$emit("change", legend);
      });
    },
    change(item) {
      this.$set(this.hideLegends, item, !this.hideLegends[item]);
      this.refresh(item);
    }
  },
  mounted() {
    this.calcuate();
  },
  beforeDestroy() {
    this.axis.uninstall();
  }
};
</script>

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
import mixin, { ChartProps } from "../chart-mixins";

export default {
  name: "v-chart-pie",
  mixins: [mixin, ChartProps],
  props: {
    series: {
      type: Array,
      required: true
    }
  }
};
</script>

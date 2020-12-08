<template>
  <div
    class="mo-chart__legends"
    :style="{
      paddingRight: showArrow ? `${offsetHeight}px` : '0',
      height: height
    }"
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
    <label class="mo-chart__legends__slide" v-if="showArrow" @click="toogle">
      <!-- <i :class="['icon v-icon-up', { active: active }]"></i> -->
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="22"
        viewBox="0 0 1024 1024"
        :class="['icon', { active: active }]"
      >
        <title></title>
        <g id="icomoon-ignore"></g>
        <path
          fill="#595959"
          d="M214.656 694.664c-5.798 5.798-13.808 9.384-22.656 9.384-17.695 0-32.040-14.345-32.040-32.040 0-8.848 3.586-16.858 9.384-22.656v0l320-320c5.794-5.808 13.805-9.401 22.656-9.401s16.862 3.593 22.655 9.401l320.001 320.001c5.798 5.798 9.384 13.808 9.384 22.656 0 17.695-14.345 32.040-32.040 32.040-8.848 0-16.858-3.586-22.656-9.384v0l-297.344-297.408-297.344 297.408z"
        ></path>
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  name: "mo-chart-legend",
  props: {
    legends: {
      type: Array,
      required: true
    },
    hideLegends: {
      type: Object,
      required: true
    },
    legendColor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      offsetHeight: 22,
      scrollHeight: 0,
      active: false
    };
  },
  computed: {
    height() {
      return `${this.active ? this.scrollHeight : this.offsetHeight}px`;
    },
    showArrow() {
      return this.offsetHeight + 2 < this.scrollHeight;
    }
  },
  methods: {
    change(item) {
      this.$emit("change", item);
    },
    toogle() {
      this.active = !this.active;
    }
  },
  mounted() {
    this.scrollHeight = this.$el.scrollHeight;
  }
};
</script>

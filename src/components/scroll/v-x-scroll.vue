<template>
  <v-scroll
    ref="scroll"
    :height="height"
    :width="width"
    :toX="toX"
    :toY="toY"
    :toIndex="toIndex"
  >
    <slot></slot>
  </v-scroll>
</template>

<script>
export default {
  name: "v-x-scroll",
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    toX: {
      type: Number,
      default: 0
    },
    toY: {
      type: Number,
      default: 0
    },
    toIndex: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 5
    }
  },
  computed: {
    scroll() {
      return this.$refs.scroll;
    }
  },
  watch: {
    count() {
      this.update();
    }
  },
  methods: {
    update() {
      if (this.count > 0) {
        let node = this.scroll.view.children[0];
        if (node) {
          let height = node.children[0].offsetHeight;
          let maxHeight = height;
          for (let i = 1; i < this.count; i++) {
            if (node.children[i]) {
              maxHeight += node.children[0].offsetHeight;
            } else {
              maxHeight += height;
            }
          }
          this.scroll.setSize(maxHeight, this.width);
        }
      }
    }
  },
  mounted() {
    this.update();
  }
};
</script>

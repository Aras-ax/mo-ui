<template>
  <div
    class="mo-container"
    :style="{
      width: _width,
      paddingBottom: $slots.footer ? `${footerHeight}px` : 0
    }"
  >
    <header
      class="mo-container__header"
      :style="{ height: `${headerHeight}px` }"
    >
      <slot name="header"></slot>
    </header>
    <nav class="mo-container__nav" :style="{ width: _asideWidth }">
      <slot name="aside"></slot>
    </nav>
    <section
      class="mo-container__main"
      :style="{ paddingLeft: _asideWidth, paddingTop: `${headerHeight}px` }"
    >
      <slot></slot>
    </section>
    <footer
      class="mo-container__footer"
      v-if="$slots.footer"
      :style="{ height: `${footerHeight}px`, paddingLeft: _asideWidth }"
    >
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import { size } from "../filters";

export default {
  name: "mo-container",
  props: {
    width: {
      type: [String, Number],
      default: "100%"
    },
    asideWidth: {
      type: [String, Number],
      default: 256
    },
    headerHeight: {
      type: Number,
      default: 64
    },
    footerHeight: {
      type: Number,
      default: 64
    }
  },
  computed: {
    _width() {
      return size(this.width);
    },
    _asideWidth() {
      return size(this.asideWidth);
    }
  }
};
</script>

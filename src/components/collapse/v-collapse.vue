<template>
  <div class="v-collapse border-b">
    <div
      class="v-collapse__header"
      :class="{ 'is-active': isActive }"
      @click="change(!isActive)"
    >
      {{ title }}
      <i
        class="v-collapse__arrow v-icon-up"
        :class="{ 'is-active': isActive }"
      ></i>
    </div>
    <collapse-transition>
      <div class="v-collapse__item" v-show="isActive">
        <div class="v-collapse__item__content">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from "./collapse-transition";

export default {
  name: "v-collapse",
  props: {
    title: String,
    actived: {
      type: Boolean,
      default: false
    },
    text: String
  },
  data() {
    return {
      isActive: this.actived
    };
  },
  watch: {
    actived(value) {
      this.isActive = value;
    }
  },
  model: {
    prop: "actived",
    event: "change"
  },
  components: {
    "collapse-transition": CollapseTransition
  },
  methods: {
    change(val) {
      this.isActive = val;
      this.$emit("change", val);
    }
  }
};
</script>

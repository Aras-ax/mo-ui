<template>
  <div class="mo-collapse border-b" :class="{'disabled': isDisabled}">
    <div
      class="mo-collapse__header"
      :class="{ 'is-active': isActive }"
      @click="change(!isActive)"
    >
      <slot name="title" v-if="$slots.title"></slot>
      <template v-else>
        {{ title }}
      </template>
      <i
        class="mo-collapse__arrow v-icon-up"
        :class="{ 'is-active': isActive }"
      ></i>
    </div>
    <collapse-transition>
      <div class="mo-collapse__item" v-show="isActive">
        <div class="mo-collapse__item__content">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from "./collapse-transition";

export default {
  name: "mo-collapse",
  props: {
    title: String,
    actived: {
      type: Boolean,
      default: false
    },
    text: String,
    disabled: {
      type: [Boolean, String]
    }
  },
  data() {
    return {
      isActive: this.actived
    };
  },
  computed: {
    isDisabled() {
      return this.disabled === true || this.disabled === "";
    }
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
      if (this.isDisabled) {
        return;
      }

      this.isActive = val;
      this.$emit("change", val);
    }
  }
};
</script>

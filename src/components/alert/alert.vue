<template>
  <transition name="mo-alert-fade">
    <div v-show="visible" class="mo-alert" :class="[`mo-alert--${type}`]">
      <!-- main content -->
      <div
        class="mo-alert__main"
        :class="[
          isBigPadding,
          {
            'mo-alert__main--center': alignCenter,
            'mo-alert__main--hide-icon': !showIcon
          }
        ]"
      >
        <div class="mo-alert__main-inner">
          <div v-if="title" class="mo-alert__title" :class="[isBoldTitle]">
            {{ title }}
          </div>
          <div class="mo-alert__description">
            <slot>{{ description }}</slot>
          </div>
        </div>
      </div>

      <!-- icon -->
      <div v-if="showIcon" class="mo-alert__icon">
        <i class="mo-alert__icon-inner" :class="[iconClass, isBigIcon]"></i>
      </div>

      <!-- button -->
      <div class="mo-alert__button">
        <span
          v-if="showDetailsButton"
          class="mo-alert__show-detail"
          @click="$emit('handle-details-click')"
          >{{_('Details')}}</span
        >
        <span
          v-if="showClose"
          class="mo-alert__close v-icon-close"
          @click="close"
        ></span>
      </div>
    </div>
  </transition>
</template>

<script>
// 类型--字体图标映射表
const typeToIcon = {
  success: "v-icon-ok-plane",
  warn: "v-icon-remind-plane",
  info: "v-icon-help-plane",
  error: "v-icon-close-plane"
};

export default {
  name: "mo-alert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    icon: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    title: String,
    description: String,
    showClose: {
      type: Boolean,
      default: true
    },
    showDetailsButton: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    iconClass() {
      return this.icon || typeToIcon[this.type];
    },
    isBigPadding() {
      return this.description || this.$slots.default
        ? "mo-alert__main--big-padding"
        : "";
    },
    isBigIcon() {
      return this.description || this.$slots.default
        ? "mo-alert__icon--big"
        : "";
    },
    isBoldTitle() {
      return this.description || this.$slots.default
        ? "mo-alert__title--bold"
        : "";
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>

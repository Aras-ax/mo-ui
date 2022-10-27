<template>
  <div class="mo-popconfirm">
    <mo-popups
      ref="popups"
      :custom-style="{ minWidth, maxWidth }"
      :show-arrow="showArrow"
      :position="position"
      :popups-offset="popupsOffset"
      :arrow-offset="arrowOffset"
      :between-space="betweenSpace"
      :trigger="trigger"
      :transition="transition"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :click-outside-to-hide="clickOutsideToHide"
    >
      <div class="mo-popconfirm__box">
        <div class="mo-popconfirm__main" v-if="!$slots.default">
          <div :class="['mo-popconfirm__title', { 'has-icon': icon }]">
            {{ title }}
          </div>
          <i :class="['mo-popconfirm__icon', icon]"></i>
        </div>
        <slot> </slot>
        <div v-if="showConfirm || showCancel" class="mo-popconfirm__footer">
          <div class="mo-popconfirm__button-group">
            <mo-button
              v-if="showCancel"
              class="mo-popconfirm__button-item"
              :type="cancelButtonType"
              size="S"
              @click="handleCancel"
              >{{ cancelButtonText }}</mo-button
            >
            <mo-button
              v-if="showConfirm"
              class="mo-popconfirm__button-item"
              :type="confirmButtonType"
              size="S"
              @click="handleConfirm"
              >{{ confirmButtonText }}</mo-button
            >
          </div>
        </div>
      </div>

      <template #reference>
        <slot name="reference"></slot>
      </template>
    </mo-popups>
  </div>
</template>

<script>
export default {
  name: "mo-popconfirm",
  data() {
    return {
      minWidth: "200px"
    };
  },
  props: {
    title: String,
    icon: String,
    popupsOffset: Number,
    arrowOffset: Number,
    betweenSpace: Number,
    trigger: {
      type: String,
      default: "click"
    },
    position: {
      type: String,
      default: "top-center"
    },
    maxWidth: {
      type: String,
      default: "300px"
    },
    transition: String,
    showArrow: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    clickOutsideToHide: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: _("OK")
    },
    cancelButtonText: {
      type: String,
      default: _("Cancel")
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "info"
    }
  },
  methods: {
    handleConfirm() {
      this.hide();
      this.$emit("confirm");
    },
    handleCancel() {
      this.hide();
      this.$emit("cancel");
    },
    show() {
      this.$refs.popups.show();
    },
    hide() {
      this.$refs.popups.hide();
    }
  }
};
</script>

<template>
  <transition :name="transitionName" @after-leave="handleAfterLeave">
    <div
      :class="[
        'mo-notification',
        `mo-notification--${position}`,
        { 'mo-notification--icon': showIcon }
      ]"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div v-if="showIcon" class="mo-notification__iconbox">
        <i
          class="mo-notification__icon"
          :class="[
            `mo-notification__icon--${status}`,
            `v-icon-${STATUS_ICON[status]}`
          ]"
        ></i>
      </div>
      <div class="mo-notification__header">
        <h5
          v-if="title"
          :class="[
            `mo-notification__title`,
            { 'mo-notification__close-space': showClose }
          ]"
        >
          {{ title }}
        </h5>
      </div>
      <div class="mo-notification__main">
        <template v-if="!dangerouslyUseHTMLString">
          <p
            :class="[
              `mo-notification__main--default`,
              { 'mo-notification__close-space': showClose && !title }
            ]"
          >
            {{ content }}
          </p>
        </template>
        <template v-else>
          <div v-html="content"></div>
        </template>
      </div>
      <div v-if="showConfirm" class="mo-notification__button">
        <mo-button
          class="mo-notification__button-confirm"
          type="primary"
          size="M"
          @click="close"
          >{{ confirmText }}</mo-button
        >
      </div>
      <div
        v-if="showClose"
        @click="close"
        class="v-icon-close mo-notification__close"
      ></div>
    </div>
  </transition>
</template>

<script>
const STATUS = {
  NONE: "none",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  NOTICE: "notice"
};

const STATUS_ICON = {
  [STATUS.SUCCESS]: "ok-plane",
  [STATUS.ERROR]: "close-plane",
  [STATUS.WARNING]: "warning-plane",
  [STATUS.NOTICE]: "notice-plane"
};

export default {
  name: "mo-notification",
  data() {
    this.STATUS = STATUS;
    this.STATUS_ICON = STATUS_ICON;
    return {
      visible: false,
      title: "",
      content: "",
      duration: 4500,
      position: "top-right",
      showClose: true,
      showConfirm: false,
      confirmText: _("OK"),
      verticalOffset: 16,
      dangerouslyUseHTMLString: false,
      status: STATUS.NONE
    };
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  computed: {
    showIcon() {
      return this.status !== STATUS.NONE;
    },
    positionArr() {
      return this.position.split("-");
    },
    transitionName() {
      const [, second] = this.positionArr;

      return `${this.$options.name}-fade-${second}`;
    },
    positionStyle() {
      const [first, second] = this.positionArr;

      return {
        [first]: `${this.verticalOffset}px`,
        [second]: "16px"
      };
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
          this.clearTimer();
        }, this.duration);
      }
    },
    show() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    }
  }
};
</script>

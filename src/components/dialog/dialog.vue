<template>
  <transition
    name="mo-dialog-fade"
    @before-enter="() => setBodyOverflow('add')"
    @after-enter="() => setBodyOverflow('add')"
    @after-leave="animationAfterLeave"
  >
    <div ref="dialogBox" v-show="visible" class="mo-dialog-box">
      <transition name="mo-dialog-fade">
        <div
          v-show="visible"
          v-if="modal"
          class="v-modal"
          :style="dialogWrapperStyle"
          @click="handleClickModal"
        ></div>
      </transition>
      <transition name="mo-dialog-inner-fade" @after-enter="updateDialogStyle">
        <div
          class="mo-dialog-wrapper"
          :style="dialogWrapperStyle"
          v-if="visible"
        >
          <div ref="dialog" class="mo-dialog" :style="dialogStyle">
            <div class="mo-dialog__header" ref="header" v-if="showTitle">
              <slot name="title">
                <div
                  :class="[
                    `mo-dialog__title`,
                    { 'mo-dialog__close-space': showClose }
                  ]"
                >
                  <h5
                    :class="[
                      'mo-dialog__title-inner',
                      { 'mo-dialog__center': alignCenter }
                    ]"
                  >
                    {{ title }}
                  </h5>
                </div>
              </slot>
              <i
                v-if="showClose"
                class="mo-dialog__close v-icon-close"
                @click="close"
              ></i>
            </div>
            <div class="mo-dialog__main" ref="main"  :style="{ maxHeight: `${maxHeight}px` }">
              <slot></slot>
            </div>
            <div ref="footer" :class="['mo-dialog__footer', footerClass]">
              <slot name="footer">
                <div
                  :class="[
                    'mo-dialog__button-group',
                    { 'mo-dialog__center': alignCenter }
                  ]"
                >
                  <mo-button
                    v-if="showCancel"
                    class="mo-dialog__button-item"
                    :type="cancelButtonType"
                    size="M"
                    @click="handleCancel"
                    >{{ cancelButtonText }}</mo-button
                  >
                  <mo-button
                    v-if="showConfirm"
                    class="mo-dialog__button-item"
                    :type="confirmButtonType"
                    :is-loading="isLoading"
                    size="M"
                    @click="handleConfirm"
                    >{{ confirmButtonText }}</mo-button
                  >
                </div>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>

import { debounce } from "@/components/libs";
export default {
  name: "mo-dialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    title: String,
    width: Number,
    modal: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
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
      default: ""
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    rendered: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogWrapperStyle: {},
      maxHeight: this.getMaxHeight()
    };
  },
  mounted() {
    if (this.appendToBody) {
      this.insertDialogToBody();
    }
    this.resizeFn = debounce(() => {
      this.maxHeight = this.getMaxHeight();
    }, 100);
    window.addEventListener("resize", this.resizeFn);
  },
  computed: {
    visible() {
      return this.value;
    },
    dialogStyle() {
      const { width } = this,
        styleObj = {};

      styleObj.width = width ? `${width}px` : "auto";

      return styleObj;
    },
    footerClass() {
      return !this.$slots.footer && !this.showConfirm && !this.showCancel
        ? "mo-dialog__footer--none"
        : "";
    }
  },
  methods: {
    getMaxHeight() {
      return (
        parseInt(
          (window.document.body.clientHeight ||
            window.document.documentElement.clientHeight) * 0.8
        ) -
        56 -
        (this.showTitle ? 48 : 0)
      );
    },
    show() {
      // this.visible = true;
      this.$emit("input", true);
    },
    close() {
      // this.visible = false;
      this.$emit("input", false);
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    },
    handleClickModal() {
      if (this.closeOnClickModal === false) {
        return;
      }
      this.close();
    },
    handleCancel() {
      this.$emit("cancel");
      this.close();
    },
    handleConfirm() {
      this.$emit("confirm");
    },

    updateDialogStyle() {
      const $dialog = this.$refs.dialog,
        { width } = $dialog.getBoundingClientRect();
      this.dialogWrapperStyle = {
        minWidth: `${width}px`
      };
    },

    animationAfterLeave() {
      this.setBodyOverflow("remove");
      this.$emit("after-close");
    },
    setBodyOverflow(excutor) {
      document.body.classList[excutor]("body--overflow-hidden");
    },
    insertDialogToBody() {
      const $dialogBox = this.$refs.dialogBox;

      document.body.appendChild($dialogBox);
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.$emit("open");
      }
    }
  },
  beforeDestroy() {

    window.removeEventListener("resize", this.resizeFn);
  }
};
</script>

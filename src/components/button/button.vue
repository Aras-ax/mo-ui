<template>
  <button
    type="button"
    ref="btn"
    @click="clickBtn"
    class="mo-button"
    :class="[
      sizeCss,
      typeCss,
      {
        [typeCss + '--disabled']: isDisabled !== false,
        'mo-button--inner': !$slots.default && type === 'text'
      }
    ]"
  >
    <template v-if="!isLoading">
      <!-- 按钮前缀图标 -->
      <span
        class="mo-button__icon mo-button__item"
        v-if="icon"
        :class="icon"
      ></span>
      <!-- 按钮内容 -->
      <span class="mo-button__item" v-if="$slots.default">
        <slot></slot>
      </span>
      <!-- 按钮后缀图标 -->
      <span
        class="mo-button__icon mo-button__item"
        v-if="suffixIcon"
        :class="suffixIcon"
      ></span>
    </template>
    <!-- 加载中 -->
    <template v-else>
      <span class="mo-button--loading mo-button__icon v-icon-loading"></span>
    </template>
  </button>
</template>

<script>
export default {
  name: "mo-button",
  props: {
    type: {
      type: String,
      default: "info"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //是否在加载中
    isLoading: {
      type: Boolean,
      default: false
    },
    //前缀图标
    icon: String,
    //后缀图标
    suffixIcon: String,
    size: {
      type: String,
      default: "M"
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "mo-button--medium",
        S: "mo-button--small",
        L: "mo-button--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //按钮类型样式
    typeCss() {
      let cssObj = {
        primary: "mo-button--primary",
        //secondary: "mo-button--secondary",
        info: "mo-button--info",
        danger: "mo-button--danger",
        text: "mo-button--text"
      };
      return cssObj[this.type] || cssObj.info;
    },
    isDisabled() {
      if (this.disabled) {
        return true;
      }
      
      if (
        this.$parent &&
        this.$parent.$options._componentTag === "mo-form-item" &&
        this.$parent.isDisabled
      ) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {};
  },
  methods: {
    clickBtn() {
      if (this.isLoading) return;
      if (this.isDisabled) return;
      this.$emit("click");
      this.$refs.btn.blur();
    }
  }
};
</script>

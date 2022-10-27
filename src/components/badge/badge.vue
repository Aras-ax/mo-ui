<template>
  <div class="mo-badge">
    <sup
      :class="[
        `mo-badge__${type}`,
        `mo-badge__${status}`,
        { 'mo-badge__rt': position !== '' }
      ]"
      >{{ text }}</sup
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mo-badge",
  props: {
    text: [String, Number],
    type: {
      type: String,
      default: "tip",
      validator(val) {
        let index = ["tip", "dot"].indexOf(val);
        if (index === -1) {
          console.error(`mo-badge的type只能为tip或dot`);
        }
        return index !== -1;
      }
    },
    status: {
      type: String,
      default: "default",
      validator(val) {
        let index = ["success", "error", "warn", "default"].indexOf(val);
        if (index === -1) {
          console.error(
            `mo-badge的status只能为['success', 'error', 'warn', 'default']`
          );
        }
        return index !== -1;
      }
    },
    position: {
      type: String,
      default: "",
      validator(val) {
        let index = ["", "rt"].indexOf(val);
        if (index === -1) {
          console.error(`mo-badge的status只能为空或rt`);
        }
        return index !== -1;
      }
    }
  }
};
</script>

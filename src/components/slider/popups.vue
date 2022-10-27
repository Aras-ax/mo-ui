<template>
  <div class="mo-popups mo-popups--dark">
    <div class="mo-popups__main">
      <div class="mo-tooltip__main">
        <div class="mo-tooltip__content">{{ value }}</div>
      </div>
    </div>
    <i class="mo-popups__arrow mo-popups__arrow mo-popups__arrow--top"></i>
  </div>
</template>

<script>
export default {
  name: "slider-popups",
  props: {
    value: {
      default: ""
    }
  }
};
</script>

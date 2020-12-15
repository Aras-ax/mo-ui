<template>
  <div id="app">
    <demo-head></demo-head>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DemoHead from "./components/head";

export default {
  name: "app",
  components: {
    DemoHead
  }
};
</script>

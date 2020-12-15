<template>
  <div id="app">
    <mo-head></mo-head>
    <main class="main">
      <nav class="main-nav">
        <mo-scroll>
          <ul>
            <li v-for="route in routes" :key="route.name">
              <router-link
                :exact="true"
                class="nav-item"
                v-if="route.title"
                :to="route.path"
                >{{ route.title }}</router-link
              >
            </li>
          </ul>
        </mo-scroll>
      </nav>
      <section class="main-body">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import { routes } from "./views/router";
import MoHead from "../demo/components/head.vue";

export default {
  data() {
    return {
      routes: routes
    };
  },
  components: {
    MoHead
  }
};
</script>

<style lang="scss">
$header-height: 80px;
$nav-width: 256px;

#app {
  padding-top: 100px;
  height: 100%;
}

.main {
  padding-left: $nav-width;
  overflow: hidden;

  .main-nav {
    width: $nav-width;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    bottom: 0;
    top: $header-height;
    left: 0;
    z-index: 1;
  }

  .main-body {
    padding-left: 64px;
    padding-right: 24px;
  }
}

.nav-item {
  height: 48px;
  line-height: 48px;
  padding: 0 26px;
  display: block;
  color: #595959;
  text-decoration: none;
  border-right: 1px solid #e9e9e9;

  cursor: pointer;

  &.router-link-active {
    background-color: #fff5e4;
    color: #ff801f;
    border-right: 2px solid #ff801f;
  }
}
</style>

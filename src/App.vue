<template>
  <div id="app">
    <header class="header">
      <a class="Header-link" href="https://github.com/moshang-xc">
        <svg
          class="octicon octicon-mark-github v-align-middle"
          height="32"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <label>陌上</label>
      </a>
      <div class="header-text">组件开发使用文档</div>
    </header>
    <main class="main">
      <nav class="main-nav">
        <v-scroll>
          <ul>
            <!-- <template v-if="route.title"> -->
            <li v-for="route in routes" :key="route.name">
              <router-link
                :exact="true"
                class="nav-item"
                v-if="route.title"
                :to="route.path"
                >{{ route.title }}</router-link
              >
            </li>
            <!-- </template> -->
          </ul>
        </v-scroll>
      </nav>
      <section class="main-body">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import { routes } from "./router";

export default {
  data() {
    return {
      routes: routes
    };
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

.header {
  height: $header-height;
  padding: 0 58px 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 17px 0px #f5f5f5;
  z-index: 1;
  background-color: #fff;

  .Header-link {
    height: 32px;
    line-height: 32px;
    text-decoration: none;
    color: #000000;
    font-size: 18px;
    cursor: pointer;

    svg,
    label {
      vertical-align: middle;
    }

    label {
      padding-left: 14px;
    }
  }

  .header-text {
    color: rgba($color: #000000, $alpha: 0.65);
  }
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

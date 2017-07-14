<template>
  <div class="app">
    <AppHeader @toggleAside="toggleAside" :class="{'with-aside': isAsideShown}"></AppHeader>
    <GlobalNavigation :isShown="isAsideShown"></GlobalNavigation>
    <article class="app__body" :class="{'with-aside': isAsideShown}">
      <router-view></router-view>
    </article>
    <AppFooter :class="{'with-aside': isAsideShown}"></AppFooter>
    <div class="dimmed" @click="toggleAside" :class="{active: isAsideShown}"></div>
  </div>
</template>

<script>
  import 'normalize.css';
  import 'vue';
  import AppHeader from '@/components/partials/AppHeader';
  import AppFooter from '@/components/partials/AppFooter';
  import GlobalNavigation from '@/components/partials/GlobalNavigation';

  export default {
    name: 'app',
    components: { AppHeader, AppFooter, GlobalNavigation },
    data() {
      return {
        isAsideShown: false,
      };
    },
    methods: {
      toggleAside() {
        this.isAsideShown = this.isAsideShown === false;
      },
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '~reset-css/reset.css';

  html {
    background-color: #f3f3f3;
    overflow-x: hidden;
  }

  .app {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.2;
    color: #444;
    .app__header {
      z-index: 100;
    }
    .nav {
      z-index: 300;
    }
    .dimmed {
      z-index: 200;
    }
  }

  .app__body {
    margin-top: 60px;
    transition: transform 0.2s ease;
    &.with-aside {
      transform: translateX(240px);
    }
  }

  .dimmed {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.4);
    &.active {
      display: block;
    }
  }

  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
</style>

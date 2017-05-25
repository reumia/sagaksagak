<template>
  <div class="app">

    <!-- 헤더 -->
    <AppHeader></AppHeader>
    <!-- 헤더 -->

    <!-- 본문 -->
    <article class="app__body">
      <router-view></router-view>
    </article>
    <!-- 본문 -->

    <!-- 푸터 -->
    <AppFooter></AppFooter>
    <!-- 푸터 -->
  </div>
</template>

<script>
  import 'normalize.css';
  import 'vue';
  import AppHeader from './components/partials/AppHeader';
  import AppFooter from './components/partials/AppFooter';

  export default {
    name: 'app',
    components: { AppHeader, AppFooter },
  };
</script>

<style lang="scss">
  html {
    background-color: #f3f3f3;
  }

  .app {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.2;
    color: #444;
  }

  .app__body {
    padding: 20px;
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

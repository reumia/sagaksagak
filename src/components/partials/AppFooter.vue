<template>
  <footer class="app__footer">
    &copy; 사각사각
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .app__footer {
    @include transition (transform)
    border-top: 2px solid $color-border;
    padding: $space-unit;
    color: $color-text-light;
    text-align: center;
    &.with-aside {
      transform: translateX($aside-width);
    }
  }
</style>

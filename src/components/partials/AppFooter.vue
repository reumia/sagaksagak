<template>
  <footer class="app__footer">
    &copy; 사각사각
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .app__footer {
    @include transition (padding);
    margin-top: $space-unit * 4;
    padding: $space-unit;
    color: $color-disabled;
    text-align: center;
  }
</style>

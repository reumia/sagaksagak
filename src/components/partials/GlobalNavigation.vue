<template>
  <nav class="nav" :class="{active: isShown}" role="navigation">
    <router-link :to="{ name: 'Cut', params: { id: 0 } }" class="nav-item">Cut 0</router-link>
    <router-link :to="{ name: 'Cut', params: { id: 3 } }" class="nav-item">Cut 3</router-link>
    <router-link :to="{ name: 'User' }" class="nav-item">User</router-link>
    <router-link :to="{ name: 'Comic' }" class="nav-item">Comic</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'global-navigation',
    props: ['isShown'],
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'init';

  .nav {
    @include transition (transform);
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: $space-unit 0;
    width: $aside-width;
    background-color: $color-background;
    transform: translateX($aside-width);
    &.active {
      display: block;
      transform: translateX(0);
      box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
    }
  }
  .nav-item {
    display: block;
    padding: ($space-unit / 2) $space-unit;
    text-decoration: none;
    color: $color-text;
    &.active {
      color: $color-brand;
    }
  }

  .with-aside {
    transform: translateX($aside-width * -1);
  }

</style>

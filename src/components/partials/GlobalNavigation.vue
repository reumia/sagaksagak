<template>
  <nav class="nav" :class="{active: isShown}" role="navigation">
    <a href="#" class="nav__item" role="menuitem">메뉴1</a>
    <a href="#" class="nav__item" role="menuitem">메뉴2</a>
    <a href="#" class="nav__item" role="menuitem">메뉴3</a>
    <a href="#" class="nav__item" role="menuitem">메뉴4</a>
    <a href="#" class="nav__item" role="menuitem">메뉴5</a>
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
  .nav__item {
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

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
    data() {
      return {
        msg: '',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .nav {
    box-sizing: border-box;
    overflow: hidden;
    display: block;
    position: fixed;
    z-index: 200;
    top: 60px;
    bottom: 0;
    left: 0;
    padding: 10px 0;
    width: 240px;
    transform: translateX(-100%);
    background-color: #fff;
    transition: transform 0.2s ease;
    &.active {
      display: block;
      transform: translateX(0);
    }
  }
  .nav__item {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    &.active {
      color: #35a3ff;
    }
  }

</style>

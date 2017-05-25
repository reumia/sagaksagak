<template>
  <nav class="nav" role="navigation">
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
    data() {
      return {
        msg: '',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .nav {
    display: none;
    position: fixed;
    z-index: 100;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #fff;
    /*background-color: #35a3ff;*/
  }
  .nav__item {
    display: block;
    padding: 10px;
    text-align: center;
  }

</style>

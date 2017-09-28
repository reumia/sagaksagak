<template>
  <header class="app__header">
    <div class="header-menu">
      <button class="header-menu-button" type="button" @click="$emit('toggleAside')">MENU</button>
    </div>
    <div class="header-logo">
      <router-link :to="{name: 'Home'}" class="header-logo-link">SAGAKSAGAK</router-link>
    </div>
  </header>
</template>

<script>
  import 'vue'

  export default {
    name: 'app-header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import 'init';

  .app__header {
    position: relative;
    display: flex;
    padding: 0 $space-unit;
    color: $color-brand;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
  }

  .header-logo,
  .header-menu {
    padding-left: $space-unit;
  }

  .header-menu-button,
  .header-logo-link {
    @extend %form-init;
    display: inline-block;
    width: auto;
    line-height: $header-height;
    text-align: left;
    white-space: nowrap;
  }

  .header-logo-link {
    font-size: $font-size-large;
    font-weight: bold;
    color: $color-brand;
  }

  .header-button-wrap {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    white-space: nowrap;
  }

  .header-button ~ .header-button {
    margin-left: $space-unit;
  }
</style>

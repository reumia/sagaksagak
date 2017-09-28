<template>
  <header class="app__header">
    <div class="header-menu">
      <button class="header-menu-button" type="button" @click="$emit('toggleAside')">
        <i class="material-icons icon">menu</i>
      </button>
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
    font-size: $font-size-large;
    line-height: $header-height;
    text-align: left;
    white-space: nowrap;
    .icon {
      color: $color-text-lighter;
    }
  }

  .header-logo-link {
    font-weight: bold;
    color: $color-brand;
  }
</style>

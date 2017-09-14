<template>
  <header class="app__header">
    <div class="header-logo">
      <router-link :to="{name: 'Intro'}" class="header-logo-link">sagaksagak</router-link>
    </div>
    <div class="header-button-wrap">
      <button class="header-button" type="button" @click="$emit('toggleAside')">menu</button>
      <router-link :to="{name: 'Login'}" class="header-button" :class="{active: $store.state.isAuthorized}">login</router-link>
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

  .header-logo,
  .header-button-wrap {
    flex: 1;
  }

  .header-button,
  .header-logo-link {
    @extend %form-init;
    display: inline-block;
    width: auto;
    line-height: $space-unit * 4;
    text-align: left;
    white-space: nowrap;
  }

  .header-logo-link {
    font-size: $font-size-large;
    font-weight: bold;
    color: $color-brand;
  }

  .header-button-wrap {
    text-align: right;
    white-space: nowrap;
  }

  .header-button ~ .header-button {
    margin-left: $space-unit;
  }
</style>

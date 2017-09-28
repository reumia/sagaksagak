<template>
  <div class="nav" :class="{active: $store.state.isGlobalNavigationVisible}" role="navigation">
    <button class="nav-close" @click="$store.dispatch('HIDE_GLOBAL_NAVIGATION')">닫기</button>
    <nav class="nav-list">
      <router-link :to="{ name: 'Home' }" class="nav-list-item">About SAGAKSAGAK</router-link>
      <router-link v-if="$store.state.isAuthorized" :to="{ name: 'MyPage' }" class="nav-list-item">My Page</router-link>
      <router-link v-else :to="{ name: 'SignIn' }" class="nav-list-item">Sign In</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 0 } }" class="nav-list-item">Cut 0</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 3 } }" class="nav-list-item">Cut 3</router-link>
      <router-link :to="{ name: 'User', params: { id: 3 } }" class="nav-list-item">User</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'global-navigation',
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $aside-width;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
    transform: translateX(-$aside-width);
    &.active {
      transform: translateX(0);
    }
  }

  .nav-close {
    @extend %form-init;
    padding: 0 ($space-unit * 2);
    height: $header-height;
    background-color: $color-text;
    color: $color-background;
    text-align: left;
  }

  .nav-list {
    padding: $space-unit 0;
  }

  .nav-list-item {
    display: block;
    text-decoration: none;
    padding: $space-unit ($space-unit * 2);
    color: $color-text;
    text-transform: uppercase;
    &.active {
      color: $color-brand;
    }
  }

  .with-aside {
    padding-right: $aside-width;
  }

</style>

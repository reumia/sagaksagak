<template>
  <div class="nav" :class="{active: $store.state.isGlobalNavigationVisible}" role="navigation">
    <nav class="nav-list">
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
    left: 0;
    right: 0;
    padding: 0 ($space-unit * 2);
    background-color: $color-background;
    transform: translateY(-$aside-height);
    &.active {
      transform: translateY(0);
      box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
    }
  }

  .nav-close {
    @extend %form-init;
    width: auto;
    height: $aside-height;
  }

  .nav-list {
    display: flex;
    justify-content: center;
  }

  .nav-list-item {
    text-decoration: none;
    padding: 0 $space-unit;
    color: $color-text;
    height: $aside-height;
    line-height: $aside-height;
    text-transform: uppercase;
    &.active {
      color: $color-brand;
    }
  }

  .with-aside {
    /* transform: translateY($aside-height); */
  }

</style>

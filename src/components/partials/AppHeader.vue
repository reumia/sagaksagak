<template>
  <header class="app__header">
    <div class="nav-header">
      <button class="nav-header-button" type="button"><span class="hidden">헤더메뉴</span></button>
    </div>
    <div class="logo">
      <a href="/" class="logo-link"><span class="hidden">사각사각</span></a>
    </div>
    <div class="nav-user">
      <button class="nav-user-button" v-bind:class="{active: isAuthorized}" type="button"><span class="hidden">유저메뉴</span></button>
      <GlobalNavigation></GlobalNavigation>
    </div>
  </header>
</template>

<script>
  import 'vue';
  import GlobalNavigation from './GlobalNavigation';

  export default {
    name: 'app-header',
    components: { GlobalNavigation },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isAuthorized: true,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .app__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }

  .nav-header-button,
  .nav-user-button,
  .logo-link {
    -webkit-appearance: none;
    display: block;
    padding: 13px 10px;
    border: 0;
    background-color: transparent;
    &:after {
      content: '';
      display: block;
      height: 34px;
    }
  }

  .logo-link:after {
    width: 64px;
    background-image: url(../../assets/ico-logo.png);
    background-size: 64px 34px;
  }

  .nav-header-button:after {
    width: 34px;
    background-image: url(../../assets/ico-menu.png);
    background-size: 34px 34px;
  }

  .nav-user-button {
    &:after {
      width: 34px;
      background-image: url(../../assets/ico-user-logged-out.png);
      background-size: 34px 34px;
    }
    &.active {
      &:after {
        background-image: url(../../assets/ico-user-logged-in.png);
      }
    }
  }

</style>

<template>
  <header class="app__header">
    <div class="nav-header">
      <button class="nav-header-button" type="button" @click="$emit('toggleAside')"><span class="hidden">헤더메뉴</span></button>
    </div>
    <div class="logo">
      <router-link :to="{name: 'Intro'}" class="logo-link"><span class="hidden">사각사각</span></router-link>
    </div>
    <div class="nav-user">
      <router-link :to="{name: 'Login'}" class="nav-user-button" :class="{active: $store.state.isAuthorized}"><span class="hidden">유저메뉴</span></router-link>
    </div>
  </header>
</template>

<script>
  import 'vue';

  export default {
    name: 'app-header',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .app__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    transition: transform 0.2s ease;
    &.with-aside {
      transform: translateX(240px);
    }
  }

  .nav-header-button,
  .nav-user-button,
  .logo-link {
    -webkit-appearance: none;
    display: block;
    padding: 13px;
    border: 0;
    outline: 0;
    background-color: transparent;
    &:after {
      content: '';
      box-sizing: border-box;
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

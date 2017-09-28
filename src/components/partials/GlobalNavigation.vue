<template>
  <div class="nav" :class="{active: $store.state.isGlobalNavigationVisible}" role="navigation">
    <!-- 닫기 버튼 -->
    <button class="nav-close" @click="$store.dispatch('HIDE_GLOBAL_NAVIGATION')">닫기</button>
    <!-- 유저 버튼 -->
    <router-link class="nav-user active" v-if="IS_CURRENT_USER_EXIST" :to="{ name: 'User', params: { id: currentUser.id } }">
      <button class="button-config" @click="$router.push({ name: 'MyPage' })"><i class="material-icons">settings</i></button>
      <div class="title">{{ currentUser.name }}</div>
      <div class="info">
        <div class="info-email">{{ currentUser.email }}</div>
      </div>
    </router-link>
    <router-link class="nav-user" v-else :to="{ name: 'SignIn' }">
      <div class="title">로그인</div>
    </router-link>
    <!-- 네비게이션 버튼 -->
    <nav class="nav-list">
      <router-link :to="{ name: 'Home' }" class="nav-list-item">About SAGAKSAGAK</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 0 } }" class="nav-list-item">Cut 0</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 3 } }" class="nav-list-item">Cut 3</router-link>
      <router-link :to="{ name: 'User', params: { id: 3 } }" class="nav-list-item">User</router-link>
    </nav>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'global-navigation',
    computed: {
      ...mapState([ 'currentUser' ]),
      ...mapGetters([ 'IS_CURRENT_USER_EXIST' ])
    },
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
    transform: translateX(-$aside-width);
    box-shadow: 2px 0 0 rgba(0,0,0,.07);
    &.active {
      transform: translateX(0);
    }
  }

  .nav-close {
    @extend %form-init;
    padding: 0 ($space-unit * 2);
    height: $header-height;
    color: $color-text-lighter;
    text-align: left;
  }

  .nav-user {
    position: relative;
    display: block;
    padding: ($space-unit * 1.5) ($space-unit * 2);
    background-color: $color-text-lighter;
    text-decoration: none;
    &.active {
      background-color: $color-brand;
    }
    .button-config {
      @extend %form-init;
      position: absolute;
      top: $space-unit * 1.5;
      right: $space-unit * 2;
      width: auto;
      cursor: pointer;
    }
    .title {
      color: $color-background;
    }
    .info {
      color: transparentize($color-background, .3);
      font-size: $font-size-small;
    }
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

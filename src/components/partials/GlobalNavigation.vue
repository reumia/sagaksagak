<template>
  <div class="nav" :class="{active: $store.state.isGlobalNavigationVisible}" role="navigation">
    <!-- 닫기 버튼 -->
    <button class="nav-close" @click="HIDE_GLOBAL_NAVIGATION">
      <i class="material-icons icon">close</i>
    </button>
    <!-- 유저 버튼 : 인증 -->
    <div class="nav-user active" v-if="currentUser">
      <div class="title">{{ currentUser.name }}</div>
      <div class="info">
        <div class="info-email">{{ currentUser.email }}</div>
      </div>
      <div class="button-wrap">
        <button class="button button-primary button-small" @click="$router.push({ name: 'User', params: { id: currentUser.id } })">
          <i class="material-icons icon">account_box</i> 내 사각 보러가기
        </button>
        <button class="button button-small" @click="$router.push({ name: 'MyPage' })">
          <i class="material-icons icon">settings</i> 정보수정
        </button>
        <button class="button button-danger button-small" @click="$store.dispatch('SIGN_OUT')">
          <i class="material-icons icon">power_settings_new</i> 로그아웃
        </button>
      </div>
    </div>
    <!-- 유저 버튼 : 미인증 -->
    <div class="nav-user" v-else>
      <button class="button button-primary button-small" @click="$router.push({ name: 'SignIn' })">
        <i class="material-icons icon">power_settings_new</i> 로그인
      </button>
    </div>
    <!-- 네비게이션 버튼 -->
    <nav class="nav-list">
      <router-link :to="{ name: 'Home' }" class="nav-list-item">About SAGAKSAGAK</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 0 } }" class="nav-list-item">Cut 0</router-link>
      <router-link :to="{ name: 'Cut', params: { id: 3 } }" class="nav-list-item">Cut 3</router-link>
      <router-link :to="{ name: 'User', params: { id: 3 } }" class="nav-list-item">User 3</router-link>
    </nav>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'global-navigation',
    computed: {
      ...mapState([ 'currentUser' ])
    },
    methods: {
      ...mapMutations([ 'HIDE_GLOBAL_NAVIGATION' ])
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
    text-align: left;
  }

  .nav-user {
    overflow: hidden;
    display: block;
    padding: $space-unit * 2;
    background-color: $color-text;
    .title {
      color: $color-background;
    }
    .info {
      color: transparentize($color-background, .3);
      font-size: $font-size-small;
    }
    .button-wrap {
      margin-top: $space-unit;
      .button {
        text-align: left;
      }
      .button ~ .button {
        margin-top: ($space-unit / 4);
      }
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

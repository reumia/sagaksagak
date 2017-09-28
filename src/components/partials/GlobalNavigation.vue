<template>
  <div class="nav" :class="{active: $store.state.isGlobalNavigationVisible}" role="navigation">
    <!-- 닫기 버튼 -->
    <button class="nav-close" @click="$store.dispatch('HIDE_GLOBAL_NAVIGATION')">
      <i class="material-icons icon">close</i>
    </button>
    <!-- 유저 버튼 : 인증 -->
    <div class="nav-user active" v-if="IS_CURRENT_USER_EXIST">
      <router-link class="link" :to="{ name: 'User', params: { id: currentUser.id } }" >
        <div class="title">{{ currentUser.name }}</div>
        <div class="info">
          <div class="info-email">{{ currentUser.email }}</div>
        </div>
      </router-link>
      <div class="button-wrap">
        <button class="button button-primary button-small" @click="$router.push({ name: 'MyPage' })">
          <i class="material-icons icon">settings</i> 정보수정
        </button>
        <button class="button button-danger button-small" @click="$store.dispatch('SIGN_OUT')">
          <i class="material-icons icon">exit_to_app</i> 로그아웃
        </button>
      </div>
    </div>
    <!-- 유저 버튼 : 미인증 -->
    <div class="nav-user" v-else>
      <router-link class="link" :to="{ name: 'SignIn' }">
        <div class="title">로그인</div>
      </router-link>
    </div>
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
    text-align: left;
  }

  .nav-user {
    overflow: hidden;
    display: block;
    background-color: $color-text;
    &.active {
      background-color: $color-text;
    }
    .link {
      display: block;
      padding: ($space-unit * 1.5) ($space-unit * 2);
      text-decoration: none;
    }
    .button-wrap {
      margin: ($space-unit * 0.5 * -1) ($space-unit * 2) ($space-unit * 1.5);
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

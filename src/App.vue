<template>
  <div class="app">
    <AppHeader @toggleAside="toggleAside" :class="{'with-aside': isAsideShown}"></AppHeader>
    <GlobalNavigation :isShown="isAsideShown"></GlobalNavigation>
    <article class="app__body" :class="{'with-aside': isAsideShown}">
      <router-view></router-view>
    </article>
    <AppFooter :class="{'with-aside': isAsideShown}"></AppFooter>
    <transition name="fade">
      <div class="dimmed" v-if="isAsideShown" @click="toggleAside"></div>
    </transition>
  </div>
</template>

<script>
  import 'vue'
  import AppHeader from '@/components/partials/AppHeader'
  import AppFooter from '@/components/partials/AppFooter'
  import GlobalNavigation from '@/components/partials/GlobalNavigation'

  export default {
    name: 'app',
    components: { AppHeader, AppFooter, GlobalNavigation },
    data () {
      return {
        isAsideShown: false
      }
    },
    methods: {
      toggleAside () {
        this.isAsideShown = this.isAsideShown === false
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'init';
</style>

<template>
  <div class="app">
    <AppHeader @toggleAside="toggleAside" :class="{'with-aside': isGlobalNavigationVisible}"></AppHeader>
    <GlobalNavigation :isShown="isGlobalNavigationVisible" @close="toggleAside"></GlobalNavigation>
    <main class="app__body" :class="{'with-aside': isGlobalNavigationVisible}">
      <router-view></router-view>
    </main>
    <transition name="fade">
      <div class="dimmed" v-if="isGlobalNavigationVisible" @click="toggleAside"></div>
    </transition>
  </div>
</template>

<script>
  import 'vue'
  import { mapState } from 'vuex'
  import AppHeader from '@/components/partials/AppHeader'
  import GlobalNavigation from '@/components/partials/GlobalNavigation'

  export default {
    name: 'app',
    components: { AppHeader, GlobalNavigation },
    computed: mapState([ 'isGlobalNavigationVisible' ]),
    methods: {
      toggleAside () {
        this.$store.dispatch('TOGGLE_GLOBAL_NAVIGATION')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'init';
</style>

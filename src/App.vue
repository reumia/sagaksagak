<template>
  <div class="app">
    <AppHeader @toggleAside="$store.dispatch('TOGGLE_GLOBAL_NAVIGATION')"></AppHeader>
    <GlobalNavigation :isShown="isGlobalNavigationVisible" @close="$store.dispatch('TOGGLE_GLOBAL_NAVIGATION')"></GlobalNavigation>
    <main class="app__body">
      <router-view></router-view>
    </main>
    <transition name="fade">
      <div class="dimmed" v-if="isGlobalNavigationVisible" @click="$store.dispatch('HIDE_GLOBAL_NAVIGATION')"></div>
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
    computed: mapState([ 'isGlobalNavigationVisible' ])
  }
</script>

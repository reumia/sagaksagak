<template>
  <div class="app">
    <AppHeader @toggleAside="$store.dispatch('TOGGLE_GLOBAL_NAVIGATION')"></AppHeader>
    <GlobalNavigation :isShown="isGlobalNavigationVisible"></GlobalNavigation>
    <main class="app__body">
      <router-view></router-view>
    </main>
    <transition name="fade">
      <div class="dimmed" v-if="isGlobalNavigationVisible" @click="HIDE_GLOBAL_NAVIGATION"></div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import AppHeader from '@/components/partials/AppHeader'
  import GlobalNavigation from '@/components/partials/GlobalNavigation'

  export default {
    name: 'app',
    components: { AppHeader, GlobalNavigation },
    computed: mapState([ 'isGlobalNavigationVisible' ]),
    methods: mapMutations([ 'HIDE_GLOBAL_NAVIGATION' ])
  }
</script>

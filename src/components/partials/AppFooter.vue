<template>
  <footer class="app__footer">
    &copy; 사각사각
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .app__footer {
    border-top: 2px solid #e9e9e9;
    padding: 20px;
    color: #999;
    text-align: center;
    transition: transform 0.2s ease;
    &.with-aside {
      transform: translateX(240px);
    }
  }
</style>

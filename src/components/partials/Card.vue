<template>
  <div class="card">
    <div class="card-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title']
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .card {
    box-sizing: border-box;
    padding: 0 ($space-unit * 2);
    margin: ($space-unit * 2) auto;
    max-width: $site-width;
  }

  .card-title {
    margin-bottom: $space-unit;
    color: $color-text-lighter;
    font-size: $font-size-small;
  }

  .card-login {
    max-width: $site-width / 2.5;
  }
</style>

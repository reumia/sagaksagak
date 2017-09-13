<template>
  <div class="page">
    <div class="page-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
    props: ['title'],
  };
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .page {
    padding: $space-unit;
    background-color: $color-background;
  }
  .page-title {
    margin-bottom: $space-unit;
    font-weight: bold;
  }
</style>

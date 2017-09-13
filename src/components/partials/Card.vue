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
    margin: $space-unit;
    padding: $space-unit;
    background-color: $color-background;
    border-bottom: 2px solid $color-border;
  }
  .card-title {
    margin-bottom: $space-unit;
    font-weight: bold;
  }
</style>

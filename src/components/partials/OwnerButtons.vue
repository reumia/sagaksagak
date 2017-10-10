<template>
  <div class="owner-buttons button-flex">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'owner-buttons'
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .owner-buttons {
    box-sizing: border-box;
    margin: ($space-unit * -2) auto ($space-unit * 3);
    max-width: $space-unit * 24;
  }
</style>

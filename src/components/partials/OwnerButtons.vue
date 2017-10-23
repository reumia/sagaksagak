<template>
  <div class="owner-buttons">
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
    display: flex;
    box-sizing: border-box;
    padding: 0 ($space-unit * 2);
    margin: 0;
    max-width: $space-unit * 24;
    text-align: center;
    .button {
      border-width: 0;
      border-radius: 0;
    }
    @media screen and (min-width: 376px) {
      padding: 0;
    }
  }
</style>

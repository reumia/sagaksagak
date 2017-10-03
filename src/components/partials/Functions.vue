<template>
  <div class="function-wrap">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'functions'
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .function-wrap {
    display: flex;
    justify-content: center;
  }

  .function {
    @extend %form-init;
    display: inline-block;
    padding: 0 ($space-unit / 2);
    width: auto;
    background-color: #fff;
    color: $color-text-light;
    font-size: $font-size-smaller;
    line-height: $space-unit * 3;
    cursor: pointer;
    .icon {
      vertical-align: -2px;
    }
  }
</style>

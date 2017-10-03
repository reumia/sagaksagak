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
  }

  .function {
    @extend %form-init;
    display: inline-block;
    padding: 2px ($space-unit / 2) 0;
    width: auto;
    border-radius: $radius-unit;
    background-color: #fff;
    color: $color-text-light;
    font-size: $font-size-smaller;
    line-height: 20px;
    box-shadow: $box-shadow-unit;
    cursor: pointer;
    .icon {
      vertical-align: -2px;
    }
  }

  .function ~ .function {
    margin-left: $space-unit / 2;
  }
</style>

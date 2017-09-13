<template>
  <a href="#" class="tab" :class="{active: isActive}">{{ text }}</a>
</template>

<script>
  export default {
    name: 'tab',
    props: ['text'],
    data() {
      return {
        isActive: true,
      };
    },
  };
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .tab {
    display: inline-block;
    padding: 5px 7px 3px;
    border-radius: 3px;
    border: 2px solid $color-border-dark;
    color: $color-border-dark;
    font-size: $font-size-small;
    font-weight: bold;
    text-decoration: none;
    &.active {
      background-color: $color-background;
      border-color: $color-brand;
      color: $color-brand;
    }
  }
  .tab ~ .tab {
    margin-left: $space-unit / 2;
  }
</style>

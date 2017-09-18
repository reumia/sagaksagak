<template>
  <router-link :to="{ name: 'Comic', params: { id: 2 } }" class="index-item" :style="{ width: width }">
    <div class="index-item-body">
      <div class="index-item-text">
        코믹으로 가는 링크.
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'index-item',
    props: [ 'width' ],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .index-item {
    box-sizing: border-box;
    padding: $space-unit / 2;
    color: $color-text;
  }

  .index-item-body {
    position: relative;
    box-sizing: border-box;
    padding-top: 100%;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
  }

  .index-item-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $space-unit;
  }
</style>

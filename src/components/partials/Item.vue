<template>
  <router-link :to="{ name: 'Cut', params: { id: 2 } }" class="item">
    <div class="item-body">
      <div class="item-text">
        코믹으로 가는 링크. <br/>
        현재는 테스트 용도로 컷으로 가도록 작성.
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'item',
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .item {
    box-sizing: border-box;
    padding: $space-unit / 2;
    width: 25%;
  }

  .item-body {
    position: relative;
    box-sizing: border-box;
    padding-top: 100%;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
  }

  .item-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $space-unit;
  }
</style>

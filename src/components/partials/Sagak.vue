<template>
  <div class="sagak">
    <div class="sagak-body" :style="{ backgroundImage: `url(${data.imageUrl})` }"></div>
  </div>
</template>

<script>
  export default {
    name: 'sagak',
    props: ['data'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .sagak {
    margin: 0 auto;
    width: 300px;
  }

  .sagak-body {
    padding-top: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    background-color: $color-background;
    background-position: top left;
    background-size: cover;
  }
</style>

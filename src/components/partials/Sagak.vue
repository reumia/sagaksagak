<template>
  <router-link :to="{ name: 'Cut', params: { id: data.id } }" class="sagak" :class="{ active: isCurrent }" :style="{ width: `${width}px`, margin: `0 ${margin/2}px` }">
    <div class="sagak-body" :style="{ backgroundImage: `url(${data.imageUrl})` }"></div>
  </router-link>
</template>

<script>
  export default {
    name: 'sagak',
    props: ['data', 'isCurrent', 'width', 'margin'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .sagak {
    position: relative;
    float: left;
    -webkit-filter: grayscale(100%);
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparentize($color-background-dark, .3);
    }
    &.active {
      -webkit-filter: grayscale(0);
      &:after {
        display: none;
      }
      .sagak-body {
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
      }
    }
  }

  .sagak-body {
    padding-top: 100%;
    background-color: $color-background;
    background-position: top left;
    background-size: cover;
  }
</style>

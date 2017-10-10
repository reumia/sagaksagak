<template>
  <div class="introduction">
    <div class="introduction-image" v-if="imageUrl" :style="{ backgroundImage: `url(${imageUrl})`}"></div>
    <div class="introduction-title">
      {{ title }}
      <Sticker :code="status"></Sticker>
    </div>
    <div class="introduction-descriptions">{{ descriptions }}</div>
    <slot></slot>
  </div>
</template>

<script>
  import Sticker from '@/components/partials/Sticker'

  export default {
    name: 'introduction',
    props: [ 'title', 'status', 'descriptions', 'imageUrl' ],
    components: { Sticker }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .introduction {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin: ($space-unit * 3) auto;
    padding: $space-unit ($space-unit * 2) 0;
    max-width: $space-unit * 24;
    background-color: $color-background;
    border-radius: $radius-unit;
    box-shadow: $box-shadow-unit;
  }
  .introduction-image {
    margin: ($space-unit * -1) ($space-unit * -2) ($space-unit * 1.5);
    height: 100px;
    background-position: center center;
    background-size: cover;
  }
  .introduction-title {
    font-size: $font-size-large;
    font-weight: bold;
  }
  .introduction-descriptions {
    margin-top: $space-unit / 2;
    color: $color-text-light;
    font-size: $font-size-small;
  }
</style>

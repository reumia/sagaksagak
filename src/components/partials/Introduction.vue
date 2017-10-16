<template>
  <div class="introduction">
    <div class="introduction-image" v-if="image_url" :style="{ backgroundImage: `url(${image_url})`}"></div>
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
    props: [ 'title', 'status', 'descriptions', 'image_url' ],
    components: { Sticker }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .introduction {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-bottom: $space-unit * 3;
    max-width: $space-unit * 24;
    text-align: center;
    @media screen and (min-width: 376px) {
      border-radius: $radius-unit;
      margin: ($space-unit * 3) auto;
      background-color: $color-background;
      box-shadow: $box-shadow-unit;
    }
  }
  .introduction-image {
    padding-top: 33%;
    width: 100%;
    height: 0;
    background-position: center center;
    background-size: cover;
  }
  .introduction-title {
    padding: ($space-unit * 1.5) ($space-unit * 2) 0;
    font-size: $font-size-large;
    font-weight: bold;
  }
  .introduction-descriptions {
    padding: ($space-unit / 2) ($space-unit * 2) 0;
    color: $color-text-light;
    font-size: $font-size-small;
  }
</style>

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
    padding: ($space-unit * 1.5) ($space-unit * 2) 0;
    max-width: $space-unit * 24;
    @media screen and (min-width: 376px) {
      border-radius: $radius-unit;
      margin: ($space-unit * 3) auto;
      background-color: $color-background;
      box-shadow: $box-shadow-unit;
    }
  }
  .introduction-image {
    margin: ($space-unit * -1.5) ($space-unit * -2) ($space-unit * 1.5);
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

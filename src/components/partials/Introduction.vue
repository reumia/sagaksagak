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
    components: { Sticker },
    mounted () {
      console.log(this.$el.offsetTop, this.$el.offsetHeight)
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import 'init';

  .introduction {
    overflow: hidden;
    position: relative;
    z-index: 100;
    margin: 0 0 $space-unit * 2;
    max-width: $intro-width;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
    box-sizing: border-box;
    border-top: 1px solid rgba(0,0,0,.1);
    @media screen and (min-width: 376px) {
      margin: ($space-unit * 2) auto;
      border-radius: $radius-unit;
      border-top: 0;
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
    padding: ($space-unit) ($space-unit * 2) 0;
    font-size: $font-size-large;
    font-weight: bold;
  }
  .introduction-descriptions {
    padding: ($space-unit / 2) ($space-unit * 2) 0;
    color: $color-text-light;
    font-size: $font-size-small;
  }
</style>

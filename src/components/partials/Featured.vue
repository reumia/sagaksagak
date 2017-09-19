<template>
  <div class="featured">
    <div class="featured-background" :style="{ backgroundImage: `url(${data.backgroundImage})` }"></div>
    <div class="featured-body">
      <img v-if="data.foregroundImage" class="featured-foreground" :src="data.foregroundImage" />
      <div class="featured-title">
        {{ data.title }}
        <Sticker v-if="data.stickers" v-for="sticker in data.stickers" :code="sticker"></Sticker>
      </div>
      <div class="featured-items">
        <button v-for="item in data.items" class="featured-item" @click="item.click">
          <i :class="`icon-${item.icon}`"></i>
          {{ item.value }}
        </button>
      </div>
      <div class="featured-descriptions">{{ data.descriptions }}</div>
    </div>
  </div>
</template>

<script>
import Sticker from '@/components/partials/Sticker'

export default {
  name: 'featured',
  props: [ 'data' ],
  components: { Sticker }
}
</script>

<style lang="scss">
@import 'init';

$featured-background-height: $space-unit * 20;
$featured-body-height: $space-unit * 10;

.featured {
  position: relative;
  overflow: hidden;
  background-color: $color-background;
  box-shadow: $box-shadow-unit;
}

.featured-background {
  position: relative;
  height: $featured-background-height;
  background-color: $color-brand;
  background-size: cover;
  background-position: center center;
  color: $color-background;
}

.featured-body {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto ($space-unit * 2);
  padding: 0 ($space-unit * 2);
  max-width: $site-width;
}

.featured-foreground {
  box-sizing: border-box;
  display: block;
  border: 4px solid #fff;
  margin-top: ($space-unit * -10);
  width: $space-unit * 12;
  height: $space-unit * 12;
}

.featured-title {
  display: block;
  margin-top: $space-unit * 2;
  color: $color-text;
  font-size: $font-size-large;
  font-weight: bolder;
}

.featured-descriptions {
  margin-top: $space-unit / 2;
  font-size: $font-size-small;
}

.featured-items {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin: $space-unit / 2 ($space-unit / -2);
}

.featured-item {
  @extend %form-init;
  margin: 0 ($space-unit / 2);
  color: $color-text-lighter;
  font-size: $font-size-small;
  width: auto;
  text-decoration: none;
}
</style>

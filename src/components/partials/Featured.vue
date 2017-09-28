<template>
  <div class="featured">
    <div class="featured-background" v-if="backgroundImage" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="featured-body">
      <img v-if="foregroundImage" class="featured-foreground" :src="foregroundImage" />
      <div class="featured-stickers" :class="{ 'active': backgroundImage }">
        <Sticker v-if="stickers" v-for="sticker in stickers" :key="sticker" :code="sticker"></Sticker>
      </div>
      <div class="featured-title">
        {{ title }}
      </div>
      <div class="featured-items">
        <button v-for="item in items" v-if="item.value" class="featured-item" @click="item.click">
          <i class="icon material-icons">{{ item.icon }}</i>
          {{ item.value }}
        </button>
      </div>
      <div class="featured-descriptions">{{ descriptions }}</div>
    </div>
  </div>
</template>

<script>
import Sticker from '@/components/partials/Sticker'

export default {
  name: 'featured',
  props: [ 'backgroundImage', 'foregroundImage', 'title', 'descriptions', 'stickers', 'items' ],
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
  padding: ($space-unit * 2) ($space-unit * 2) 0;
  max-width: $site-width;
}

.featured-foreground {
  box-sizing: border-box;
  display: block;
  border: 4px solid #fff;
  margin-top: ($space-unit * -10);
  margin-bottom: ($space-unit * 2);
  width: $space-unit * 12;
  height: $space-unit * 12;
}

.featured-stickers {
  position: absolute;
  right: $space-unit * 2;
  &.active {
    top: -13px;
  }
}

.featured-title {
  display: block;
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
  .icon {
    vertical-align: -2px;
  }
}
</style>

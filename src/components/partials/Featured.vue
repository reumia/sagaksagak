<template>
  <div class="featured" :class="{ 'active': backgroundImage }">
    <div class="featured-background" v-if="backgroundImage" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="featured-body">
      <img v-if="foregroundImage" class="image" :src="foregroundImage" />
      <div class="text-wrap">
        <div class="button-wrap">
          <button class="button button-small button-primary">코믹관리</button>
          <button class="button button-small button-success">컷관리</button>
          <button class="button button-small button-danger">버튼</button>
        </div>
        <div class="title">
          {{ title }}
          <div class="sticker-wrap" v-if="stickers">
            <Sticker v-for="sticker in stickers" :key="sticker" :code="sticker"></Sticker>
          </div>
        </div>
        <div class="info-wrap">
          <div v-if="descriptions" class="descriptions">{{ descriptions }}</div>
          <div class="item-wrap">
            <button v-for="item in items" v-if="item.value" class="item" @click="item.click">
              <i class="icon material-icons">{{ item.icon }}</i>
              {{ item.value }}
            </button>
          </div>
        </div>
      </div>
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
}

.featured-background {
  height: $featured-background-height;
  background-color: $color-brand;
  background-size: cover;
  background-position: center center;
  box-shadow: $box-shadow-unit;
  color: $color-background;
}

.featured-body {
  display: flex;
  box-sizing: border-box;
  margin: ($space-unit * 2) auto 0;
  padding: 0 ($space-unit * 2);
  max-width: $site-width;
  min-height: $space-unit * 12;

  .active & {
    margin-top: ($space-unit * -6)
  }

  .image,
  .text-wrap {
    box-shadow: $box-shadow-unit;
    border-radius: $radius-unit;
  }
  .image {
    box-sizing: border-box;
    display: block;
    border: $radius-unit solid $color-background;
    margin-right: $space-unit;
    width: $space-unit * 12;
    height: $space-unit * 12;
    background-color: $color-background;
  }
  .text-wrap {
    position: relative;
    padding: $space-unit ($space-unit * 1.5);
    flex: 1;
    background-color: #fff;
  }
  .button-wrap {
    overflow: hidden;
    position: absolute;
    border-radius: $radius-unit;
    background-color: $color-background;
    right: 0;
    top: $space-unit * -2.5;
    display: flex;
    .button {
      white-space: nowrap;
      border-radius: 0;
      &:first-child {
        border-radius: $radius-unit 0 0 $radius-unit;
      }
      &:last-child {
        border-radius: 0 $radius-unit $radius-unit 0;
      }
    }
  }

  .title {
    display: block;
    color: $color-text;
    font-size: $font-size-large;
    font-weight: bolder;
  }
  .sticker-wrap {
    margin-left: $space-unit / 2;
    display: inline-block;
  }
  .info-wrap {
    display: flex;
    margin: $space-unit ($space-unit / -2);
    .descriptions,
    .item-wrap,
    .button-wrap {
      padding: 0 ($space-unit / 2);
    }
    .descriptions {
      font-size: $font-size-small;
    }
  }
  .item {
    @extend %form-init;
    color: $color-text-light;
    font-size: $font-size-small;
    width: auto;
    text-decoration: none;
    white-space: nowrap;
    .icon {
      vertical-align: -2px;
    }
  }
  .item ~ .item {
    margin-top: ($space-unit / 2);
  }
}
</style>

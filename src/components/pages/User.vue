<template>
  <div class="page-user">
    <div class="user">
      <div class="user-featured" :style="{ backgroundImage: `url(${$store.state.user.featuredImageUrl})` }"></div>
      <div class="user-info">
        <img class="user-image" :src="$store.state.user.profileImageUrl" />
        <div class="user-name">{{ $store.state.user.name }}</div>
        <div class="user-info-item">
          <span class="user-likes">1,000</span>
          <span class="user-contents">326</span>
          <a :href="`mailto:${$store.state.user.email}`" class="user-email">{{ $store.state.user.email }}</a>
          <a :href="$store.state.user.site" class="user-site">{{ $store.state.user.site }}</a>
        </div>
        <div class="user-descriptions">{{ $store.state.user.descriptions }}</div>
      </div>
    </div>

    <Card title="소유중인 사각">
      <Index></Index>
    </Card>
    <Card title="참여중인 사각">
      <Index rows="6"></Index>
    </Card>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Card from '@/components/partials/Card'

  export default {
    name: 'user',
    components: { Card, Index },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
@import 'init';

$user-featured-height: $space-unit * 20;
$user-info-height: $space-unit * 10;

.user {
  position: relative;
  overflow: hidden;
  background-color: $color-background;
  box-shadow: $box-shadow-unit;
}

.user-featured {
  position: relative;
  height: $user-featured-height;
  background-color: $color-brand;
  background-size: cover;
  background-position: center center;
  color: $color-background;
  &:after {
    content: '';
    position: absolute;
    top: $space-unit * 6;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, $color-background)
  }
}

.user-body {
  box-sizing: border-box;
  padding: 0 $space-unit * 2;
  text-align: center;
}

.user-info {
  position: relative;
  box-sizing: border-box;
  margin: ($space-unit * -10) auto ($space-unit * 2);
  padding: 0 ($space-unit * 2);
  max-width: $site-width;
}

.user-image {
  box-sizing: border-box;
  display: block;
  border: 4px solid #fff;
  width: $space-unit * 12;
  height: $space-unit * 12;
}

.user-name {
  display: block;
  margin-top: $space-unit * 2;
  color: $color-text;
  font-size: $font-size-large;
  font-weight: bolder;
}

.user-descriptions {
  margin-top: $space-unit / 2;
  font-size: $font-size-small;
}

.user-info-item {
  display: flex;
  flex-wrap: wrap;
  margin: $space-unit / 2 ($space-unit / -2);
  color: $color-text-light;
  font-size: $font-size-small;
}

.user-likes,
.user-contents,
.user-email,
.user-site {
  margin: 0 ($space-unit / 2);
  color: $color-text-lighter;
  text-decoration: none;
}


</style>

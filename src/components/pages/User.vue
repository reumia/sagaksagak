<template>
  <div class="page-user">
    <div class="user">
      <div class="user-featured" :style="{ backgroundImage: `url(${$store.state.user.featuredImageUrl})` }"></div>
      <div class="user-info">
        <img class="user-info-image" :src="$store.state.user.profileImageUrl" />
        <div class="user-info-text">
          <div class="user-name">{{ $store.state.user.name }}</div>
          <div class="user-email">{{ $store.state.user.email }}</div>
        </div>
      </div>
    </div>

    <Card title="소유중인 사각">
      <Index></Index>
    </Card>
    <Card title="참여중인 사각">
      <Index></Index>
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
  margin-bottom: ($user-info-height / 2) + ($space-unit * 2);
}

.user-featured {
  height: $user-featured-height;
  background-color: $color-brand;
  background-size: cover;
  background-position: center center;
  color: $color-background;
}

.user-body {
  box-sizing: border-box;
  padding: 0 $space-unit * 2;
  text-align: center;
}

.user-info {
  display: flex;
  box-sizing: border-box;
  border-radius: $space-unit / 2;
  position: absolute;
  top: $user-featured-height - ($user-info-height / 2);
  left: $space-unit * 2;
  padding: $space-unit / 2;
  height: $user-info-height;
  background-color: $color-background;
  box-shadow: $box-shadow-unit;
}

.user-info-image {
  box-sizing: border-box;
  border-radius: $space-unit / 4;
  width: auto;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.user-info-text {
  padding: ($space-unit / 2) $space-unit;
}

</style>

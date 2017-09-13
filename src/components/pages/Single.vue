<template>
  <div class="single">
    <div class="single-header" :style="{ backgroundImage: `url(${$store.state.comic.imageUrl})` }">
      <div class="single-title">
        {{ $store.state.comic.title }}
      </div>
    </div>
    <div class="single-body">
      <Sagak></Sagak>
    </div>
  </div>
</template>

<script>
  import Sagak from '@/components/partials/Sagak'

  export default {
    name: 'single',
    components: { Sagak },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .single {
  }

  .single-header {
      position: relative;
      min-height: $space-unit * 20;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      -webkit-filter: grayscale(100%);
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(transparent, $color-background-dark);
      }
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparentize($color-background-dark, .2);
      }
  }

  .single-title {
    position: relative;
    padding: $space-unit * 2;
  }

  .single-body {
    position: relative;
    margin-top: $space-unit * -12;
  }

  .sagak {
    margin: 0 auto;
    width: 300px;
  }

  .sagak-body {
    padding-top: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    background-color: $color-background;
    background-position: top left;
    background-size: cover;
  }
</style>

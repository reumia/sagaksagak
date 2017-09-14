<template>
  <div class="single">
    <div class="single-header" :style="{ backgroundImage: `url(${$store.state.comic.imageUrl})` }">
      <div class="single-title">
        {{ $store.state.comic.title }}
      </div>
    </div>
    <div class="single-body">
      <Sagak :data="getCurrentCut"></Sagak>
    </div>
  </div>
</template>

<script>
  import Sagak from '@/components/partials/Sagak'
  import _ from 'lodash'

  export default {
    name: 'single',
    components: { Sagak },
    computed: {
      getCurrentCut () {
        const currentCut = _.find(this.siblings, object => object.id === this.id)
        return currentCut
      }
    },
    data () {
      return {
        id: 2,
        siblings: [
          {
            id: 0,
            title: '유미의 세포들 #1',
            descriptions: '',
            imageUrl: '/static/example/single_02.jpg'
          },
          {
            id: 2,
            title: '유미의 세포들 #2-2',
            descriptions: '',
            imageUrl: '/static/example/single_04.jpg'
          },
          {
            id: 3,
            title: '유미의 세포들 #2-3',
            descriptions: '',
            imageUrl: '/static/example/single_05.jpg'
          }
        ],
        prev: {
          id: 1,
          title: '유미의 세포들 #0',
          descriptions: '',
          imageUrl: '/static/example/single_01.jpg'
        },
        next: {
          id: 4,
          title: '유미의 세포들 #2-1',
          descriptions: '',
          imageUrl: '/static/example/single_03.jpg'
        }
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
</style>

<template>
  <div class="cut">
    <div class="cut-header" :style="{ backgroundImage: `url(${$store.state.comic.imageUrl})` }">
      <div class="cut-title">
        {{ $store.state.comic.title }}
      </div>
    </div>
    <div class="cut-body">
      <div class="siblings" :style="{ width: `${getSiblingsWidth}px` }">
        <Sagak v-for="item in siblings"
          :key="item.id"
          :data="item"
          :width="sagakWidth"
          :isCurrent="item.id === id"
          :margin="sagakMargin"
        ></Sagak>
      </div>
    </div>
  </div>
</template>

<script>
  import Sagak from '@/components/partials/Sagak'

  export default {
    name: 'cut',
    props: [ 'id' ],
    components: { Sagak },
    computed: {
      getSiblingsWidth () {
        return (this.sagakWidth + this.sagakMargin) * this.siblings.length
      }
    },
    data () {
      return {
        sagakWidth: 300,
        sagakMargin: 16,
        siblings: [
          {
            id: 0,
            title: '유미의 세포들 #1',
            descriptions: '',
            imageUrl: '/static/example/cut_02.jpg',
            owner: 0,
            likes: 100
          },
          {
            id: 2,
            title: '유미의 세포들 #2-2',
            descriptions: '',
            imageUrl: '/static/example/cut_04.jpg',
            owner: 1,
            likes: 20
          },
          {
            id: 3,
            title: '유미의 세포들 #2-3',
            descriptions: '',
            imageUrl: '/static/example/cut_05.jpg',
            owner: 1,
            likes: 10
          },
          {
            id: 4,
            title: '유미의 세포들 #2-3',
            descriptions: '',
            imageUrl: '/static/example/cut_06.jpg',
            owner: 2,
            likes: 0
          },
          {
            id: 5,
            title: '유미의 세포들 #2-3',
            descriptions: '',
            imageUrl: '/static/example/cut_07.jpg',
            owner: 2,
            likes: 1
          },
          {
            id: 6,
            title: '유미의 세포들 #2-3',
            descriptions: '',
            imageUrl: '/static/example/cut_08.jpg',
            owner: 2,
            likes: 9999
          }
        ],
        prev: {
          id: 1,
          title: '유미의 세포들 #0',
          descriptions: '',
          imageUrl: '/static/example/cut_01.jpg',
          owner: 0,
          likes: 241
        },
        next: {
          id: 4,
          title: '유미의 세포들 #2-1',
          descriptions: '',
          imageUrl: '/static/example/cut_03.jpg',
          owner: 2,
          likes: 13
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .cut {
    position: relative;
  }

  .cut-header {
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

  .cut-title {
    position: relative;
    padding: $space-unit * 2;
  }

  .cut-body {
    position: absolute;
    top: 50%;
  }

  .siblings {
    @extend .clearfix;
    margin: 0 ($space-unit * 1.5);
  }
</style>

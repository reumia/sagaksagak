<template>
  <slick class="carousel" ref="slick" :options="slickOptions">
    <div class="carousel-item">
      <div class="carousel-body">첫번째 슬라이드</div>
    </div>
    <div class="carousel-item">
      <div class="carousel-body">두번째 슬라이드</div>
    </div>
  </slick>
</template>

<script>
  import Slick from 'vue-slick'
  import 'slick-carousel/slick/slick.css'

  export default {
    name: 'carousel',
    components: { Slick },
    data () {
      return {
        slickOptions: {
          arrows: false,
          dots: true,
          dotsClass: 'carousel-dots'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .carousel {
    color: #fff
  }
  .carousel-body {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $space-unit;
    width: 100%;
    height: $space-unit * 20;
    background-color: $color-brand;
  }
  .carousel-dots {
    position: absolute;
    bottom: $space-unit;
    right: $space-unit;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li ~ li {
      margin-left: $space-unit / 4;
    }
    .slick-active {
      button {
        background-color: $color-background;
      }
    }
    button {
      -webkit-appearance: none;
      box-sizing: border-box;
      display: block;
      margin: 0;
      padding: 0;
      width: $space-unit / 2;
      height: $space-unit / 2;
      border: 2px solid $color-background;
      background-color: transparent;
      color: transparent;
    }
  }
</style>

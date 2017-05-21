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
  import Slick from 'vue-slick';
  import 'slick-carousel/slick/slick.css';

  export default {
    name: 'carousel',
    components: { Slick },
    data() {
      return {
        slickOptions: {
          arrows: false,
          dots: true,
          dotsClass: 'carousel-dots',
        },
      };
    },
  };
</script>

<style lang="scss">
  .carousel {
    margin: -20px -20px 20px;
    color: #fff;
  }
  .carousel-body {
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 200px;
    background-color: #35a3ff;
  }
  .carousel-dots {
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li ~ li {
      margin-left: 5px;
    }
    .slick-active {
      button {
        background-color: #fff;
      }
    }
    button {
      -webkit-appearance: none;
      box-sizing: border-box;
      display: block;
      margin: 0;
      padding: 0;
      width: 8px;
      height: 8px;
      border: 2px solid #fff;
      background-color: transparent;
      color: transparent;
    }
  }
</style>

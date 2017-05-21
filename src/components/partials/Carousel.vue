<template>
  <div>
    <div class="carousel">
      <div class="carousel-item">
        <div class="carousel-body">
          첫번째 슬라이드
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-body">
          두번째 슬라이드
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
  };
</script>

<style lang="scss" scoped>
  .carousel {
    margin: -20px -20px 20px;
    background-color: #35a3ff;
    color: #fff;
  }
  .carousel-body {
    padding: 20px;
    width: 100%;
    height: 200px;
    box-sizing: border-box;
  }
</style>

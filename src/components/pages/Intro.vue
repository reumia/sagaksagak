<template>
  <div class="intro">
    <Carousel></Carousel>
    {{ title }}
  </div>
</template>

<script>
  import Carousel from '../partials/Carousel';

  export default {
    name: 'hello',
    components: { Carousel },
    data() {
      return {
        title: '사각사각 소개',
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>

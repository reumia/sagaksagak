<template>
  <div class="intro">
    <Carousel></Carousel>
    <TabNavigation></TabNavigation>
  </div>
</template>

<script>
  import Carousel from '../partials/Carousel';
  import TabNavigation from '../partials/TabNavigation';

  export default {
    name: 'hello',
    components: { Carousel, TabNavigation },
    data() {
      return {
        title: '사각사각 소개',
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="intro">
    <Carousel></Carousel>
    <TabNavigation></TabNavigation>
    <Page>
      본문
    </Page>
  </div>
</template>

<script>
  import Page from '@/components/partials/Page';
  import Carousel from '@/components/partials/Carousel';
  import TabNavigation from '@/components/partials/TabNavigation';

  export default {
    name: 'hello',
    components: { Page, Carousel, TabNavigation },
    data() {
      return {
        title: '사각사각 소개',
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>

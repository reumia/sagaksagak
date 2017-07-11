<template>
  <Page class="page-single">
    <h1>캔바스를 위한 싱글페이지</h1>
    <canvas class="canvas">

    </canvas>
  </Page>
</template>

<script>
  import Page from '@/components/partials/Page';

  export default {
    name: 'single',
    components: { Page },
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../scss/form.scss';
</style>

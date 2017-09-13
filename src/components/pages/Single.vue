Card<template>
  <Card class="page-single">
    <h1>캔바스를 위한 싱글페이지</h1>
    <canvas class="canvas">

    </canvas>
  </Card>
</template>

<script>
  import Card from '@/components/partials/Card'

  export default {
    name: 'single',
    components: { Card },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';
</style>

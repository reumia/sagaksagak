<template>
  <div>
    <Carousel></Carousel>
    <Card title="인기사각">
      <Index></Index>
    </Card>
    <Card title="최근사각">
      <Index></Index>
    </Card>
  </div>
</template>

<script>
  import Index from '@/components/partials/Index'
  import Card from '@/components/partials/Card'
  import Carousel from '@/components/partials/Carousel'

  export default {
    name: 'hello',
    components: { Card, Carousel, Index },
    data () {
      return {
        title: '사각사각 소개'
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
@import 'init';

p ~ p {
  margin-top: $space-unit;
}
</style>

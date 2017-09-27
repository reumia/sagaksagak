<template>
  <div class="page-intro">
    <Carousel></Carousel>

    <Card title="인기사각">
      <Index :items="$store.state.comicsBest"></Index>
    </Card>
    <Card title="최근사각">
      <Index :items="$store.state.comicsLatest"></Index>
    </Card>
  </div>
</template>

<script>
  import Carousel from '@/components/partials/Carousel'
  import Index from '@/components/partials/Index'
  import Card from '@/components/partials/Card'

  export default {
    name: 'intro',
    components: { Carousel, Card, Index },
    created () {
      this.$store.dispatch('GET_LATEST_COMICS')
    },
    data () {
      return {
        title: '사각사각 소개'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';
</style>

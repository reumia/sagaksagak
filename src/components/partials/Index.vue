<template>
  <div class="index">
    <div class="items">
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
      <IndexItem></IndexItem>
    </div>
  </div>
</template>

<script>
  import IndexItem from '@/components/partials/IndexItem'

  export default {
    name: 'index',
    components: { IndexItem },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: $space-unit / -2;
  }
</style>

<template>
  <div class="index">
    <div class="items">
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/partials/Item'

  export default {
    name: 'index',
    components: { Item },
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

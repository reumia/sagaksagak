<template>
  <div class="index">
    <div class="items">
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
      <IndexItem :width="`${100 / rowsInColumn}%`"></IndexItem>
    </div>
  </div>
</template>

<script>
  import IndexItem from '@/components/partials/IndexItem'

  export default {
    name: 'index',
    components: { IndexItem },
    props: [ 'rows' ],
    computed: {
      rowsInColumn () {
        return typeof this.rows !== 'undefined' ? this.rows : 4
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

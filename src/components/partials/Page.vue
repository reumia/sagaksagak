<template>
  <div class="page">
    <div class="page-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
    props: ['title'],
  };
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .page {
    padding: 20px;
    background-color: #fff;
  }
  .page-title {
    margin-bottom: 20px;
    font-weight: bold;
  }
</style>

<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
  };
</script>

<style lang="scss" scoped>
  .page {
    padding: 20px;
    background-color: #fff;
  }
</style>

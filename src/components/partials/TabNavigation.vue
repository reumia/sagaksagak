<template>
  <div class="tab">
    <Tab text="인기사각"></Tab><!--
    --><Tab text="최근사각"></Tab><!--
    --><Tab text="관심사각"></Tab><!--
    --><Tab text="참여사각"></Tab>
  </div>
</template>

<script>
  import Tab from './Tab';

  export default {
    name: 'tab-navigation',
    components: { Tab },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .tab {
    margin-top: 20px;
    text-align: center;
  }
</style>

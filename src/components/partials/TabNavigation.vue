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
    padding: 20px 0;
    margin: 0 -20px 20px;
    background-color: #f3f3f3;
    text-align: center;
  }
</style>

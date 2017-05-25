<template>
  <a href="#" class="tab__item" v-bind:class="{active: isActive}">{{ text }}</a>
</template>

<script>
  export default {
    name: 'tab',
    props: ['text'],
    data() {
      return {
        isActive: true,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .tab__item {
    display: inline-block;
    padding: 3px 7px;
    border: 2px solid #aaa;
    color: #aaa;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    &.active {
      background-color: #fff;
      border-color: #35a3ff;
      color: #35a3ff;
    }
  }
  .tab__item ~ .tab__item {
    margin-left: 8px;
  }
</style>

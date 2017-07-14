<template>
  <a href="#" class="tab" :class="{active: isActive}">{{ text }}</a>
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

<style lang="scss" scoped rel="stylesheet/scss">
  .tab {
    display: inline-block;
    padding: 5px 7px 3px;
    border-radius: 3px;
    border: 2px solid #aaa;
    color: #aaa;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    &.active {
      background-color: #fff;
      border-color: #35a3ff;
      color: #35a3ff;
    }
  }
  .tab ~ .tab {
    margin-left: 8px;
  }
</style>

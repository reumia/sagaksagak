<template>
  <router-link :to="{ name: 'Comic', params: { id: id } }" class="index-item" :style="{ width: width }">
    <div class="index-item-body">
      <div class="index-item-contents">
        <div v-if="imageUrl" class="image" :style="{ backgroundImage: `url(${imageUrl})`}"></div>
        <div class="texts">
          <div class="title">{{ title }}</div>
          <div class="date">{{ createdAt | formatDate }}</div>
        </div>
      </div>

    </div>
  </router-link>
</template>

<script>
  import filters from '@/utils/filters'

  export default {
    name: 'index-item',
    props: [ 'width', 'id', 'title', 'createdAt', 'imageUrl' ],
    filters: filters,
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'init';

  .index-item {
    box-sizing: border-box;
    padding: $space-unit / 2;
    color: $color-text;
    text-decoration: none;
  }

  .index-item-body {
    position: relative;
    box-sizing: border-box;
    padding-top: 100%;
    background-color: $color-background;
    box-shadow: $box-shadow-unit;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid rgba(0,0,0,.1);
    }
  }

  .index-item-contents {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .image {
      position: relative;
      flex: 1;
      background-size: cover;
      background-color: $color-disabled;
      background-position: center center;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid rgba(0,0,0,.05);
      }
    }
    .texts {
      padding: $space-unit;
      font-size: $font-size-small;
      .title {
        margin-bottom: $space-unit / 4;
        font-weight: bold;
      }
      .date {
        color: $color-text-lighter;
        font-size: $font-size-smaller;
      }
    }
  }
</style>

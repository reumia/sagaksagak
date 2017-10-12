<template>
  <div class="exists-image" v-if="image_url" :style="{ backgroundImage: `url(${image_url})` }">
    <div class="button-flex">
      <router-link :to="{ name: 'ChangeProfileImage' }" class="button button-extra-small button-primary"><i class="icon material-icons">edit</i> 수정</router-link>
      <button class="button button-extra-small button-danger" @click="handleClick"><i class="icon material-icons">delete</i> 삭제</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exists-image',
    props: [ 'image_url' ],
    methods: {
      handleClick () {
        this.$emit('onDelete')
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .exists-image {
    @include transition(height);
    position: relative;
    border-radius: $radius-unit;
    margin: ($space-unit / 2) auto;
    height: 120px;
    background-size: cover;
    background-position: center center;
    &.active {
      height: 39px;
    }
    .button-flex {
      justify-content: flex-end;
      padding: $space-unit / 2;
    }
  }
</style>

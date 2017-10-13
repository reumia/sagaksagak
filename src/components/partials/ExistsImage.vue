<template>
  <div class="exists-image" v-if="currentUser.image_url" :style="{ backgroundImage: `url(${currentUser.image_url})` }">
    <div class="button-flex">
      <button class="button button-extra-small button-danger" @click="deleteImage"><i class="icon material-icons">delete</i> 삭제</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'exists-image',
    computed: mapState([ 'currentUser' ]),
    methods: {
      deleteImage () {
        // TODO : Store currentUser의 image_url 제거
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

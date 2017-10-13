<template>
  <div class="file-uploader-wrap">
    <!-- Exists Image -->
    <div class="exists-image" v-if="exists" :style="{ backgroundImage: `url(${exists})` }">
      <div class="button-flex">
        <button class="button button-extra-small button-danger" @click="deleteImage"><i class="icon material-icons">delete</i> 삭제</button>
      </div>
    </div>
    <!-- Uploader -->
    <div class="file-uploader" v-else>
      파일 업로더
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'file-uploader',
    data () {
      return {
        exists: null
      }
    },
    created () {
      this.exists = this.currentUser.image_url
    },
    computed: mapState([ 'currentUser' ]),
    methods: {
      addImage () {
        this.$emit('onAdded')
      },
      deleteImage () {
        this.exists = null
        this.$emit('onDeleted')
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

  .file-uploader {
    padding: ($space-unit * 4) 0;
    margin: ($space-unit / 2) 0;
    border: 2px dashed $color-border;
    background: $color-background-darker;
    &.is-dragging {
      background: repeating-linear-gradient(
        135deg,
        $color-background-dark,
        $color-background-dark 10px,
        mix($color-success, $color-background-dark, 10) 10px,
        mix($color-success, $color-background-dark, 10) 20px
      );
    }
    .button {
      margin: 0 auto;
      width: auto;
    }
  }

  .uploaded {
  }
  .uploaded-item {
    position: relative;
    margin: ($space-unit / 2) 0;
    background-color: $color-background;
    .button-close {
      position: absolute;
      z-index: 1;
      top: $space-unit / 2;
      right: $space-unit / 2;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 2px solid rgba(0,0,0,.1);
    }
    &.is-error {
      .status,
      .progress-bar {
        background-color: $color-danger;
      }
    }
    &.is-success {
      .status {
        background-color: $color-success;
      }
    }
  }
  .uploaded-item-image {
    display: block;
    width: 100%;
    height: auto;
  }
  .uploaded-item-body {
    padding: ($space-unit / 2) $space-unit;
    .status {
      display: inline-block;
      border-radius: $radius-unit;
      padding: 2px 6px 0;
      margin-right: 4px;
      background-color: $color-text-light;
      color: $color-background;
      font-size: $font-size-smallest;
      vertical-align: middle;
      text-transform: capitalize;
    }
    .name {
      color: $color-text-light;
      font-size: $font-size-smaller;
    }
  }

  .progress {
    width: 100%;
    height: $space-unit / 4;
    background-color: $color-text-lighter;
  }
  .progress-bar {
    display: block;
    width: auto;
    height: 100%;
    background-color: $color-success;
  }
</style>

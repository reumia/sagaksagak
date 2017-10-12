<template>
  <vue-transmit
    v-bind="options"
    drop-zone-classes="bg-faded"
    ref="uploader"
    @success="onSuccess"
    @error="onError"
  >
    <button class="button button-success" @click="triggerBrowse"><i class="icon material-icons">file_upload</i> 파일 업로드</button>
    <!-- Result Template -->
    <template slot="files" scope="props">
      <div v-for="(file, i) in props.files" :key="file.id" class="uploaded">
        <div class="uploaded-item" v-if="file.accepted" :class="{ 'is-error': file.status === 'error', 'is-success': file.status === 'success' }">
          <button class="button button-extra-small button-danger button-close" type="button" @click.prevent="$refs.uploader.removeAllFiles"><i class="icon material-icons">close</i></button>
          <img :src="file.dataUrl" class="uploaded-item-image"/>
          <div class="progress"><div class="progress-bar" :style="{width: file.upload.progress + '%'}"></div></div>
          <div class="uploaded-item-body">
            <span class="status">{{ file.status }}</span>
            <span class="name">{{ file.name }}</span>
          </div>
        </div>
      </div>
    </template>
  </vue-transmit>
</template>

<script>
  export default {
    name: 'file-uploader',
    data () {
      return {
        options: {
          // TODO : 파일스토리지 서비스 연동필요.
          url: `${process.env.API_ENDPOINT}/upload`,
          acceptedFileTypes: ['image/*'],
          uploadAreaClasses: 'file-uploader',
          dragClass: 'is-dragging',
          maxFiles: 1,
          uploadMultiple: false,
          clickable: false,
          thumbnailWidth: 320,
          thumbnailHeight: 120,
          dictMaxFilesExceeded: '파일은 하나만 업로드할 수 있습니다.'
        }
      }
    },
    methods: {
      triggerBrowse () {
        this.$refs.uploader.triggerBrowseFiles()
      },
      onSuccess (file, res) {
        console.log(res)
        file.url = res.downloadUrl
        this.$emit('fileUploaded', file)
      },
      onError (file, errorMsg) {
        // TODO : 에러 UI 처리
        console.warn(errorMsg, file)
      }
    },
    filters: {
      json (value) {
        return JSON.stringify(value, null, 2)
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

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

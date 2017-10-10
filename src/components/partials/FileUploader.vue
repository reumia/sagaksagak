<template>
  <vue-transmit v-bind="options" drop-zone-classes="bg-faded" ref="uploader">
    <button class="button button-success" @click="triggerBrowse"><i class="icon material-icons">file_upload</i> 파일 업로드</button>
    <!-- Result Template -->
    <template slot="files" scope="props">
      <div v-for="(file, i) in props.files" :key="file.id" class="uploaded">
        <div class="uploaded-item">
          <div class="progress"><div class="progress-bar" :style="{width: file.upload.progress + '%'}"></div></div>
          <img :src="file.dataUrl" class="uploaded-item-image"/>
          <div class="uploaded-item-body">
            <div class="name">{{ file.name }}</div>
          </div>
        </div>
        <pre style="font-size: 10px;">{{ file | json }}</pre>
      </div>
    </template>
  </vue-transmit>
</template>

<script>
  export default {
    'name': 'file-uploader',
    methods: {
      addComic () {
      },
      triggerBrowse () {
        this.$refs.uploader.triggerBrowseFiles()
      }
    },
    filters: {
      json (value) {
        return JSON.stringify(value, null, 2)
      }
    },
    data () {
      return {
        options: {
          url: `${process.env.API_ENDPOINT}/upload`,
          acceptedFileTypes: ['image/*'],
          uploadAreaClasses: 'file-uploader',
          dragClass: 'is-dragging',
          maxFiles: 1,
          uploadMultiple: false,
          clickable: false,
          thumbnailWidth: 320,
          thumbnailHeight: 160
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .file-uploader {
    padding: ($space-unit * 4) 0;
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
    overflow: hidden;
  }
  .uploaded-item {
    margin: $space-unit auto;
  }
  .uploaded-item-image {
    display: block;
    width: 100%;
    height: auto;
  }
  .uploaded-item-body {
    .name {

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

<template>
  <div class="file-uploader-wrap">
    <!-- Exists Image -->
    <div class="exists-image" v-if="base && base.imageUrl" :style="{
      backgroundImage: `url(${base.imageUrl})`,
      paddingTop: `${(100 / cropRatio)}%`
    }">
      <div class="button-flex">
        <button class="button button-extra-small button-danger" @click="deleteExists"><i class="icon material-icons">delete</i> 삭제</button>
      </div>
    </div>
    <!-- File Uploader -->
    <div class="file-uploader" v-else>
      <!-- Dimmed Layer -->
      <div v-show="$refs.upload && $refs.upload.dropActive" class="file-uploader-dimmed">
        <div class="text">Drag & Drop 하여 파일을 업로드하세요.</div>
      </div>
      <!-- Uploaded Image -->
      <div class="file-uploader-image" v-show="!edit && files.length">
        <img :src="files.length ? files[0].url : null" class="image" />
      </div>
      <!-- Uploader -->
      <div class="file-uploader-upload" v-show="!edit && !files.length" :style="{
        paddingTop: `${(100 / cropRatio)}%`
      }">
        <!--<label class="label-upload" for="file">Drag & Drop 하여 파일을 업로드하세요.</label>-->
        <file-upload
          extensions="gif,jpg,jpeg,png,webp"
          accept="image/png,image/gif,image/jpeg,image/webp"
          name="file"
          class="button button-success button-upload"
          post-action="http://127.0.0.1:3001/upload"
          :drop="!edit"
          v-model="files"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload"
        >
          <i class="icon material-icons">file_upload</i> 파일 업로드
        </file-upload>
      </div>
      <!-- Editor -->
      <div class="file-uploader-edit" v-show="edit && files.length">
        <div class="edit-image" v-if="files.length">
          <img ref="editImage" :src="files[0].url" />
        </div>
        <div class="button-flex">
          <button type="submit" class="button button-extra-small button-success" @click.prevent="onCrop">
            <i class="icon material-icons">crop</i> 자르기
          </button>
          <button type="button" class="button button-extra-small button-danger" @click.prevent="$refs.upload.clear">
            <i class="icon material-icons">close</i> 취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Cropper from 'cropperjs'

  export default {
    name: 'file-uploader',
    props: [ 'ratio' ],
    data () {
      return {
        files: [],
        edit: false,
        cropper: false
      }
    },
    computed: {
      ...mapState([ 'comic', 'user' ]),
      base () {
        // Router 이름에 따라 데이터 분배
        const currentRouterName = this.$router.history.current.name

        if (currentRouterName === 'UpdateUser') return this.user
        if (currentRouterName === 'UpdateComic') return this.comic
      },
      cropRatio () {
        return this.ratio ? this.ratio : (3 / 1)
      }
    },
    methods: {
      alert (message) {
        alert(message)
      },
      onCrop () {
        this.edit = false

        let oldFile = this.files[0]
        let binStr = atob(this.cropper.getCroppedCanvas().toDataURL(oldFile.type).split(',')[1])
        let arr = new Uint8Array(binStr.length)
        for (let i = 0; i < binStr.length; i++) {
          arr[i] = binStr.charCodeAt(i)
        }

        let file = new File([arr], oldFile.name, { type: oldFile.type })

        this.$refs.upload.update(oldFile.id, {
          file,
          type: file.type,
          size: file.size,
          active: true
        })
      },
      inputFile (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          this.$nextTick(() => {
            this.edit = true
          })
        }
        if (!newFile && oldFile) this.edit = false
        if (newFile && newFile.success && newFile.response) this.onUploadSucceed(newFile.response)
        if (newFile && newFile.error) this.onUploadError(newFile.error)
      },
      inputFilter (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
            this.alert('Your choice is not a picture')
            return prevent()
          }
        }
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
          newFile.url = ''
          let URL = window.URL || window.webkitURL
          if (URL && URL.createObjectURL) newFile.url = URL.createObjectURL(newFile.file)
        }
      },
      onUploadSucceed (response) {
        this.$emit('onSuccess', response)
      },
      onUploadError (err) {
        console.warn(err)
      },
      deleteExists () {
        this.base.imageUrl = null
        this.files = []
      }
    },
    watch: {
      edit (value) {
        if (value) {
          this.$nextTick(function () {
            if (!this.$refs.editImage) return
            this.cropper = new Cropper(this.$refs.editImage, {
              aspectRatio: this.cropRatio,
              viewMode: 1
            })
          })
        } else {
          if (this.cropper) {
            this.cropper.destroy()
            this.cropper = false
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';
  @import '~cropperjs/dist/cropper.css';

  %image-height {
    position: relative;
    border-radius: $radius-unit;
    padding-top: 33%;
    margin: ($space-unit / 2) auto;
    height: 0;
  }

  .exists-image {
    @include transition(height);
    @extend %image-height;
    background-size: cover;
    background-position: center center;
    &.active {
      height: 39px;
    }
    .button-flex {
      position: absolute;
      margin: 0;
      top: $space-unit / 2;
      right: $space-unit / 2;
      justify-content: flex-end;
    }
  }

  .file-uploader-image {
    position: relative;
    overflow: hidden;
    border-radius: $radius-unit;
    margin: ($space-unit / 2) auto;
    .image {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .file-uploader-upload {
    @extend %image-height;
    background-color: $color-disabled;
    color: $color-text-lighter;
    font-size: $font-size-small;
    text-align: center;
    .button-upload {
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      margin-left: -100px;
      margin-top: -25px;
      width: 200px;
      height: 50px;
    }
    .label-upload {
      display: block;
    }
  }

  .file-uploader-edit {
    position: relative;
    overflow: hidden;
    border-radius: $radius-unit;
    margin: ($space-unit / 2) auto;
    .button-flex {
      position: absolute;
      margin: 0;
      top: $space-unit / 2;
      right: $space-unit / 2;
      z-index: 1;
    }
  }

  .file-uploader-dimmed {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    opacity: .8;
    text-align: center;
    background: $color-text-lighter;
  }
  .file-uploader-dimmed .text {
    margin: -.5em 0 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: $font-size;
    color: #fff;
    padding: 0;
  }
</style>

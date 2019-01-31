<template>
  <div class="add-image-block">
    <b-btn @click="show=true">Добавить</b-btn>
    <b-modal id="modal1" v-model="show" title="Добавить изображение">
      <b-container fluid>
        <b-row class="mb-2 text-center">
          <b-col>
            <image-uploader
              :key="uploaderKey"
              :preview="true"
              :className="['fileinput', { 'fileinput--loaded': hasImage }]"
              capture="environment"
              :debug="1"
              doNotResize="gif"
              :autoRotate="true"
              outputFormat="verbose"
              @input="setImage"
            >
              <label 
                for="fileInput" 
                slot="upload-label"
                class="fileinput-label">
                <div class="upload-caption">
                  <span v-if="hasImage">Изменить изображение</span>
                  <span v-else>Добавить изображение</span>
                </div>
              </label>
            </image-uploader>
          </b-col>
        </b-row>
        <b-row 
          v-if="hasImage"
          class="mb-2 text-center">
          <b-col>
            <label for="imageName" >Название:</label>
            <b-form-input
                v-model="image.name"
                id="imageName"
                type="text"
                placeholder="Имя изображения"
            >
            </b-form-input>
          </b-col>
        </b-row>
        <b-row 
          v-if="hasImage"
          class="mb-1 text-center">
          <b-col>
            <b-btn @click="saveImage" variant="success">Сохранить</b-btn>
          </b-col>
        </b-row> 
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="primary" 
          @click="show=false">
          Закрыть
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'AddImageBlock',
  data () {
    return {
      uploaderKey: 0,
      imageSrc: null,
      image: null,
      hasImage: false,
      imageTitle: '',
      show: false
    }
  },
  methods: {
    setImage (output) {
      this.hasImage = true;
      this.image = output;
      this.image.id = Date.now();
    },
    saveImage () {
      this.$store.commit('saveImage', this.image)
      this.uploaderKey = Math.random()
      this.hasImage = false;
      this.image= null
      this.show = false
    }
  }
}
</script>

<style>
#fileInput {
  display: none;
}
.img-preview {
   width: 100%;
}
.fileinput-label {
  display: block;
  margin-top: 10px;
}
.upload-caption span {
  cursor: pointer;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  display: inline-block;
}
</style>

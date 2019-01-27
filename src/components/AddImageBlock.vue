<template>
  <div class="add-image-block"> 
    <!-- <picture-input 
      ref="pictureInput"
      width="200" 
      height="200" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Yeah!</h1>',
        drag: 'Кликните или перенесите фото сюда'
      }"
      @change="onChange">
    </picture-input> -->
      <b-modal id="modal1" v-model="show" title="Добавить изображение">
        <b-container fluid>
          <b-row class="mb-1 text-center">
            <b-col>
        <image-uploader
          :preview="true"
          :className="['fileinput', { 'fileinput--loaded': hasImage }]"
          capture="environment"
          :debug="1"
          doNotResize="gif"
          :autoRotate="true"
          outputFormat="verbose"
          @input="setImage"
        >
          <label for="fileInput" slot="upload-label">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  class="path1"
                  d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                ></path>
              </svg>
            </figure>
            <span class="upload-caption">{{
              hasImage ? "Изменить" : "Нажать для выбора изображения"
            }}</span>
          </label>
        </image-uploader>
        </b-col>
          </b-row>
          <b-row v-if="hasImage">
            <b-col>
              <b-form-input
                  v-model="image.name"
                  type="text"
                  placeholder="Имя изображения"
              >
              </b-form-input>
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
      <b-btn @click="show=true">Добавить</b-btn>
    <img :src="imageSrc" />
    {{image}}
  </div>
</template>

<script>
// import PictureInput from 'vue-picture-input'

export default {
  name: 'AddImageBlock',
  data () {
    return {
      imageSrc: null,
      image: null,
      hasImage: false,
      imageTitle: '',
      show: false
    }
  },
  methods: {
    // onChange (imageSrc) {
    //   //
    //   if (imageSrc) {
    //     //
    //     this.imageSrc = imageSrc
    //   } else {
    //     //
    //   }
    // }
    setImage (output) {
      this.hasImage = true;
      this.image = output;
      // console.log(this.image);
    }
  },
  components: {
    // PictureInput
  },
}
</script>

<style>
#fileInput {
  display: none;
}
</style>

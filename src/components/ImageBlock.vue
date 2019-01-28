<template>
  <div class="image-box text-center">
    <img :src="_image.dataUrl" class="image-content"/>
    <div
      v-if="!editView"
      class="title-wrapper text-center"
      @click="changeName(_image.id)">
      <p>{{_image.name}}</p>
      <img src="../assets/edit-btn.png" class="edit-btn" />
    </div>
    <div v-else
      class="title-wrapper">
      <input type="text" v-model="image.name"/>
      <b-btn size="sm"
        class="ok-btn"
        @click="saveName">
        Ok
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    _image: Object
  },
  data () {
    return {
      editView: false,
      image: null
    }
  },
  methods: {
    changeName (imageId) {
      this.image = this.$store.getters.getImage(imageId)
      this.editView = true
    },
    saveName () {
      this.editView = false
      this.$store.dispatch('changeImageData', {
        image: this.image
      })
    }
  }
}
</script>

<style>
.image-content {
  width: 300px;
  height: 200px;
}
.title-wrapper {
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 4px 0px;
}
.edit-btn {
  background: url('../assets/edit-btn.png');
  width: 19px;
  height: 18px;
  margin: 2px 0 0 10px;
}
@media only screen and (max-width: 320px) {
  .image-content {
    width: 275px;
    height: 175px;
  }
}
</style>

<template>
  <b-row align-h="center" class="image-list">
    <b-col sm="auto"
      v-for="image in getImages" 
      :key="image.id">
      <ImageBlock 
        :_image="image"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import ImageBlock from './ImageBlock'

export default {
  name: 'ImageList',
  computed: {
    ...mapGetters([
      'getImages'
    ])
  },
  components: {
    ImageBlock
  }
}
</script>

<style>

</style>

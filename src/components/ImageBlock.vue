<template>
  <div class="image-box text-center">
    <img :src="_image.dataUrl" />
    <p>{{_image.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    _image: Object
  }
}
</script>

<style>
.image-box img {
  width: 300px;
  height: 200px;
}
</style>

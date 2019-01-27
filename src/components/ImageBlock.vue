<template>
  <div class="image-box">
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

</style>

<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <SearchBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <AddImageBlock />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ImageList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import AddImageBlock from './components/AddImageBlock'

export default {
  name: 'App',
  components: {
    SearchBar,
    ImageList,
    AddImageBlock
  }
}
</script>


<style>

</style>

<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Gallery</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="search" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button  @click="searchImages" size="sm" class="my-2 my-sm-0">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchImages () {
      this.$store.commit('setSearchField', this.search)
    }
  }
}
</script>

<style>

</style>

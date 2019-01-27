<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Gallery</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <span 
            v-if="showSearchCount"
            class="mr-3 search-count">
            Найдено: {{getImages.length}}
          </span>
          <b-form-input @input="updateSearch" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchBar',
  data () {
    return {
      showSearchCount: false
    }
  },
  watch: {
    '$store.state.searchField' (_val) {
      if (_val.length) {
        this.showSearchCount = true
      } else {
        this.showSearchCount = false
      }
    }
  },
  computed: {
    ...mapGetters([
      'getImages'
    ])
  },
  methods: {
    updateSearch (value) {
      this.$store.commit('setSearchField', value)
    }
  }
}
</script>

<style>
.search-count {
  color: #fff;
}
</style>

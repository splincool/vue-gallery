import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [
      { 
        "dataUrl": 'https://picsum.photos/300/200?image=0',
        "name": "Laptop"
      },
      { 
        "dataUrl": 'https://picsum.photos/300/200?image=10',
        "name": "Nature"
      },
      { 
        "dataUrl": 'https://picsum.photos/300/200?image=22',
        "name": "Man"
      },
      { 
        "dataUrl": 'https://picsum.photos/300/200?image=15',
        "name": "Stones"
      },
      { 
        "dataUrl": 'https://picsum.photos/300/200?image=18',
        "name": "Green"
      }
    ],
    searchField: ''
  },
  mutations: {
    saveImage (state, image) {
      state.images.unshift(image)
    },
    setSearchField (state, value) {
      state.searchField = value
    }
  },
  getters: {
    getImages: state => {
      return state.images.filter(image => {
        return image.name.toLowerCase().includes(state.searchField.toLowerCase())
      })
    }
  },
  actions: {

  }
})

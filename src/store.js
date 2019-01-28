import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [
      { 
        id: 0,
        dataUrl: 'https://picsum.photos/300/200?image=0',
        name: "Laptop"
      },
      { 
        id: 1,
        dataUrl: 'https://picsum.photos/300/200?image=10',
        name: "Nature"
      },
      { 
        id: 2,
        dataUrl: 'https://picsum.photos/300/200?image=22',
        name: "Man"
      },
      { 
        id: 3,
        dataUrl: 'https://picsum.photos/300/200?image=15',
        name: "Stones"
      },
      { 
        id: 4,
        dataUrl: 'https://picsum.photos/300/200?image=18',
        name: "Green"
      },
      { 
        id: 5,
        dataUrl: 'https://picsum.photos/300/200?image=43',
        name: "City"
      },
      { 
        id: 6,
        dataUrl: 'https://picsum.photos/300/200?image=54',
        name: "Clouds"
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
    },
    changeImageName (state, payload) {
      state.images[payload.imageIndex] = payload.image
    }
  },
  getters: {
    getImages: state => {
      return state.images.filter(image => {
        return image.name.toLowerCase().includes(state.searchField.toLowerCase())
      })
    },
    getImage: (state) => (id) => {
      return state.images.find(image => image.id === id)
    }
  },
  actions: {
    changeImageData ({ commit, state }, payload) {
      var imageIndex = null
      state.images.find((image, index) => {
        if (image.id === payload.image.id) {
          imageIndex = index
        }
      })
      if (imageIndex != null) {
        commit('changeImageName', {
          imageIndex,
          image: payload.image
        })
      }
    }
  }
})

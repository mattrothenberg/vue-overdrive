import Vue from 'vue'
import Vuex from 'vuex'
import { times } from 'lodash'
import chroma from 'chroma-js'
Vue.use(Vuex)

const generateIcons = (num) => {
  let arr = []
  const scale = chroma.scale('Spectral').colors(num)
  times(num, i => {
    arr.push({
      color: scale[i],
      id: `icon-${i}`
    })
  })
  return arr
}

const store = new Vuex.Store({
  state: {
    libraries: [
      {
        name: 'Vue.js',
        slug: 'vue',
        image: 'vue.png'
      },
      {
        name: 'React',
        slug: 'react',
        image: 'react.png'
      },
      {
        name: 'Ember',
        slug: 'ember',
        image: 'ember.png'
      }
    ],
    icons: generateIcons(9)
  },
  getters: {
    getLibBySlug: state => slug => state.libraries.find(s => s.slug === slug),
    getIconById: state => id => state.icons.find(i => i.id === id)
  }
})

export default store
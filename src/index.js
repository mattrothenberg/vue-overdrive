import Overdrive from './Overdrive.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    components: {}
  },
  actions: {
    ADD_COMPONENT ({commit}, {id, el, prevPosition}) {
      commit('addComponent', {id, el, prevPosition})
    },
    REMOVE_COMPONENT ({commit}, {id}) {
      commit('removeComponent', {id})
    }
  },
  mutations: {
    addComponent(state, {id, el, prevPosition}) {
      if (state.components[id]) {
        state.components[id].push({
          id, el, prevPosition
        })
      } else {
        state.components[id] = [{id, el, prevPosition}]
      }
    },
    removeComponent (state, {id}) {
      state.components[id].shift()
    }
  }
})

const plugin = {
  install (Vue) {
    Vue.prototype.$odStore = store
    Vue.component(Overdrive.name, Overdrive)
  }
}

export default plugin
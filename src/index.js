import Vue from 'vue'
import Overdrive from './Overdrive.vue'

const plugin = {
  install(Vue, options) {
    Vue.component('Overdrive', Overdrive)
  }
}

export default plugin
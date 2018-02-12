import Overdrive from './Overdrive.vue'
import Vue from 'vue'

const plugin = {
  install (Vue) {
    Vue.component(Overdrive.name, Overdrive)
  }
}

export default plugin
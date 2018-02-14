import Overdrive from './Overdrive.vue'

const plugin = {
  install (Vue) {
    Vue.component(Overdrive.name, Overdrive)
  }
}

export default plugin
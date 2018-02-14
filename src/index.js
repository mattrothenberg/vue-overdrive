import Overdrive from './Overdrive.vue'

const plugin = {
  install (Vue) {
    Vue.component(Overdrive.name, Overdrive)
  }
}

export const overdrive = Overdrive

export default plugin
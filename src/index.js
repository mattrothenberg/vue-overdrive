import Overdrive from './Overdrive.vue'

const plugin = {
  install (Vue) {
    Vue.component('overdrive', Overdrive)
  }
}

export const VOverdrive = Overdrive

export default plugin
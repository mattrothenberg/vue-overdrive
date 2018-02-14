import Overdrive from './Overdrive.vue'

export function install (Vue) {
	if (install.installed) return
	install.installed = true

	Vue.component('overdrive', Overdrive)
}

export const VOverdrive = Overdrive

const plugin = {
	install,

	get enabled () {
		return state.enabled
	},

	set enabled (value) {
		state.enabled = value
	},
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

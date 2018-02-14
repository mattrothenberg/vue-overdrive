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

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}

export default plugin
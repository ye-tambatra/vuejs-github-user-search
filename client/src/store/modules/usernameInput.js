const state = {
	value: '',
}

const mutations = {
	setValue(state, value) {
		state.value = value
	},
}

export default {
	namespaced: true,
	state,
	mutations,
}

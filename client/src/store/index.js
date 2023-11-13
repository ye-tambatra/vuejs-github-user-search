import { createStore } from 'vuex'
import usernameInput from './modules/usernameInput'
import users from './modules/users'

const store = createStore({
	modules: {
		usernameInput,
		users,
	},
})

export default store

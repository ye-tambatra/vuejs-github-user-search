<template>
	<header class="py-3 bg-light shadow-sm">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-6 d-flex align-items-end">
					<img
						src="../assets/github.png"
						width="50"
						height="50"
						class="me-3"
					/>
					<h2>Github User Search</h2>
				</div>
				<div class="col-12 col-lg-6 mt-3 mt-lg-2">
					<form @submit.prevent="handleSubmit">
						<div class="input-group">
							<input
								type="search"
								class="form-control"
								placeholder="Enter username..."
								v-model="username"
								required
							/>
							<button type="submit" class="btn btn-outline-dark">
								<i class="fas fa-search me-1"></i>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const store = useStore()
		const router = useRouter()
		const username = computed({
			get: () => store.state.usernameInput.value,
			set: (value) => store.commit('usernameInput/setValue', value),
		})

		function handleSubmit() {
			router.push('/')
			store.dispatch('users/fetchUsers', username.value)
		}

		return {
			username,
			handleSubmit,
		}
	},
}
</script>

<style></style>

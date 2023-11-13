<template>
	<LoadingState v-if="loading" />
	<ErrorState v-else-if="error" />
	<TheLanding v-else-if="showLandingPage" />
	<div v-else class="root">
		<div class="body">
			<div class="container">
				<div class="row">
					<div class="col mt-3">
						<SearchResultInfo
							:count="totalCount"
							:username="usernameUsed"
						/>
					</div>
				</div>
				<div
					class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0 g-md-2 py-3"
				>
					<div class="col" v-for="user in users" :key="user.id">
						<UserListItem :user="user" />
					</div>
				</div>
			</div>
		</div>
		<div v-show="hasPreviousPage || hasNextPage" class="container footer">
			<div class="left">
				<button
					v-if="hasPreviousPage"
					class="btn btn-outline-dark"
					@click="handlePreviousClick"
				>
					{{ '<' }} Previous
				</button>
			</div>
			<div class="right">
				<button
					v-if="hasNextPage"
					class="btn btn-outline-dark"
					@click="handleNextClick"
				>
					Next {{ '>' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import UserListItem from '../components/UserListItem.vue'
import { mapState } from 'vuex'
import LoadingState from '../components/LoadingState.vue'
import ErrorState from '../components/ErrorState.vue'
import TheLanding from '../components/TheLanding.vue'
import SearchResultInfo from '../components/SearchResultInfo.vue'

export default {
	components: {
		UserListItem,
		LoadingState,
		ErrorState,
		TheLanding,
		SearchResultInfo,
	},

	computed: {
		...mapState({
			users: (state) => state.users.data,
			error: (state) => state.users.error,
			totalCount: (state) => state.users.totalCount,
			usernameUsed: (state) => state.users.usernameUsed,
			loading: (state) => state.users.loading,
			hasNextPage: (state) => state.users.hasNextPage,
			hasPreviousPage: (state) => state.users.hasPreviousPage,
		}),

		showLandingPage() {
			return this.usernameUsed == ''
		},
	},

	methods: {
		handlePreviousClick() {
			this.$store.dispatch('users/previousPage')
		},
		handleNextClick() {
			this.$store.dispatch('users/nextPage')
		},
	},
}
</script>

<style scoped>
.root {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.body {
	flex: 1;
}
.footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 10px 20px 10px;
}
</style>

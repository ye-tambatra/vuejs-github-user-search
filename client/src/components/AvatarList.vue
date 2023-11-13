<template>
	<div class="root">
		<div class="heading">
			<h3 class="mt-3 mb-0">
				<i class="fa fa-user text-secondary me-1"></i> {{ title }} ({{
					totalCount
				}})
			</h3>
			<hr class="my-2" />
		</div>

		<ul v-if="users.length > 0" class="list-unstyled">
			<li class="list-item" v-for="user in users" :key="user.id">
				<AvatarListItem :user="user" />
			</li>
			<li class="more my-3" v-if="totalCount > count">
				<h6 class="more ms-2">+ {{ totalCount - count }} more</h6>
			</li>
		</ul>
		<p class="lead" v-else>No {{ title }}</p>
	</div>
</template>

<script>
import AvatarListItem from './AvatarListItem.vue'

export default {
	components: {
		AvatarListItem,
	},

	data() {
		return {
			count: 7,
		}
	},

	props: {
		users: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			default: 'List',
		},
		totalCount: {
			type: Number,
			required: true,
		},
	},
}
</script>

<style scoped>
.root {
	width: 100%;
}
ul {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
li {
	margin: 1px;
}
.more {
	align-items: stretch;
}
</style>

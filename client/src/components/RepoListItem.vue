<template>
	<a :href="repo.html_url" class="wrapper p-3">
		<div class="header">
			<div class="title-container">
				<i
					class="fab fa-github me-2 text-secondary"
					style="font-size: 1.7rem"
				></i>
				<span class="title">
					{{ repo.name }}
					<span v-if="repo.fork" class="text-black">(Fork)</span>
				</span>
			</div>
			<span class="visibility rounded-pill">{{ repo.visibility }}</span>
		</div>
		<p class="body">
			{{ repo.description }}
		</p>
		<div class="footer">
			<div class="left">
				<span class="fw-bold me-3" v-if="repo.language">{{
					repo.language
				}}</span>
				<span>
					<i class="fa fa-code-branch"></i>
					{{ repo.forks_count }} forks
				</span>
			</div>
			<div class="right">
				<span class="m-0">Updated {{ lastUpdate }}</span>
			</div>
		</div>
	</a>
</template>

<script>
import moment from 'moment'

export default {
	props: {
		repo: {
			type: Object,
			required: true,
		},
	},

	computed: {
		lastUpdate() {
			return moment(this.repo.updated_at).fromNow()
		},
	},
}
</script>

<style scoped>
.wrapper {
	border: 1px solid grey;
	border-radius: 5px;
	cursor: pointer;
	transition: border 0.3s ease;
	height: 100%;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: black;
}

.wrapper:hover {
	border-width: 5px;
	border-color: rgba(39, 119, 238, 0.911);
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.title-container {
	flex: 1;
	display: flex;
	align-items: center;
}

.title {
	font-weight: bold;
	color: rgb(0, 110, 255);
}

.visibility {
	border: 1px solid grey;
	padding: 2px 10px;
}

.body {
	margin-top: 10px;
	flex: 1;
}

.footer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>

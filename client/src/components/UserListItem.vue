<template>
	<div
		class="root py-2 px-2 d-flex flex-row flex-md-column"
		@click="handleClick"
	>
		<img :src="user.avatar_url" alt="" />
		<h6 class="m-0 p-0 mt-md-2">{{ user.login }}</h6>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true,
		},
	},

	methods: {
		handleClick() {
			this.$router.push('/user/' + this.user.login)
		},
	},
}
</script>

<style scoped>
.root {
	display: flex;
	align-items: center;
	transition: background ease 0.3s;
}

.root:hover {
	border-radius: 5px;
	background-color: rgb(224, 224, 224);
	cursor: pointer;
}

img {
	width: 65px;
	height: 65px;
	background-color: rgb(173, 173, 173);
	border-radius: 100%;
	margin-right: 10px;
}
</style>

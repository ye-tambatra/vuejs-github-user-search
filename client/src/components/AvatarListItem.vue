<template>
	<div class="root">
		<img :src="user.avatar_url" alt="" class="rounded-pill" />
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
}
</script>

<style scoped>
img {
	width: 50px;
	height: 50px;
}
</style>

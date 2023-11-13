<template>
	<div class="root">
		<span class="alert alert-secondary my-0">
			<b>{{ count }}</b> results found for "<b>{{ username }}</b
			>"
		</span>
	</div>
</template>

<script>
export default {
	props: {
		count: {
			type: Number,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.root {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

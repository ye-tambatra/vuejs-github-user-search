<template>
	<div class="root">
		<div class="spinner-border text-primary" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.root {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.spinner-border {
	width: 4rem;
	height: 4rem;
}
</style>

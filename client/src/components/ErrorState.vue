<template>
	<div class="root">
		<img src="../assets/rocket.png" alt="" />
		<h1 class="my-2">OOPS !</h1>
		<p class="lead mb-0">An error has occurred.</p>
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

img {
	width: 60%;
	height: auto;
	max-width: 300px;
	min-width: 100px;
}
</style>

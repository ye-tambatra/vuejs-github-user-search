<template>
	<div class="root">
		<TheHeader />
		<main>
			<router-view />
		</main>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
	name: 'app',

	components: {
		TheHeader,
		TheFooter,
	},
}
</script>

<style scoped>
.root {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
}
</style>

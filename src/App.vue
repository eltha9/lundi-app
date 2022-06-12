<template>
	<div id="app" class="text-greyscale-black bg-background-100">
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
	#app {
		height: 100%;
		width: 100%;
	}
	div.main-view,
	main.main-view {
		height: 100%;
		width: 100%;
		padding: 0 80px;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 16px;
		overflow: auto;
		overflow-x: hidden;
		&.dashboard {
			overflow: hidden;
			padding: 0 32px;
			padding-top: 48px;
			&.collapsed {
				padding: 0 40px;
				padding-top: 48px;
			}
		}
	}
</style>

<script>
	export default {
		components: {},
	};
</script>

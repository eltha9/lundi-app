<template>
	<div id="app" class="text-greyscale-black bg-background-100">
		<router-view></router-view>
		<dialogs />
	</div>
</template>

<style lang="scss">
	#app {
		position: relative;
		height: 100vh;
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
		row-gap: 0;
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
	.upper {
		&::first-letter {
			text-transform: uppercase;
		}
	}
</style>

<script>
	import Dialogs from "@/views/Dialogs/index.vue";
	export default {
		components: {
			Dialogs,
		},
	};
</script>

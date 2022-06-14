<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">teams page</main>
</template>

<style lang="scss" scoped></style>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'DashboardTeams',
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

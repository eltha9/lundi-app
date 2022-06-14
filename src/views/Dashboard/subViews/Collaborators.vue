<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">collaborators page</main>
</template>

<style lang="scss" scoped></style>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'DashboardCollaborators',
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

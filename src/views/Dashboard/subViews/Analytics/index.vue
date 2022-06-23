<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">analytics page</main>
</template>

<style lang="scss" scoped></style>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'DashboardAnalytics',
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

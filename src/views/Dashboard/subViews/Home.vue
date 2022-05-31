<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">home page</main>
</template>

<style lang="scss" scoped></style>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'DashboardHome',
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

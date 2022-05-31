<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-main">
			<nav-header title="Home" />
		</div>
		<div>plop</div>
	</main>
</template>

<style lang="scss" scoped>
	.main-view.dashboard {
		padding-top: 52px;
	}
	.top-main {
		grid-column: 1/13;
	}
</style>

<script>
	import {mapState} from 'vuex';
	import NavHeader from '@/views/Dashboard/Header';
	export default {
		name: 'DashboardHome',
		components: {
			NavHeader,
		},
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

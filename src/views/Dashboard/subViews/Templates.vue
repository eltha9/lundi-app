<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">templates page</main>
</template>

<style lang="scss" scoped></style>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'DashboardTemplates',
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
	};
</script>

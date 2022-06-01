<template>
	<div class="sidebar bg-primary-900 text-greyscale-400 pt-8 flex flex-col justify-between" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top flex flex-col flex-1">
			<div class="top-logo px-6 pb-6 flex flex-col">
				<div class="flex justify-between items-center mb-1 text-greyscale-200">
					<span>{{ isSidebarCollapsed ? compagnie.name[0] : compagnie.name }}</span>
					<button class="collapser" @click="collapseBar()"><i class="icon-arrow-left"></i></button>
				</div>
				<span class="text-greyscale-400 sato-l-s">Lundi</span>
			</div>
			<div class="top-menu menu-list flex flex-col py-8 px-3 sato-l-l">
				<router-link :to="{ name: 'dashboard-home' }" class="link" title="home">
					<i class="icon-home"></i>
					<span class="fs-body">Home</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-teams' }" class="link" title="Equipes">
					<i class="icon-grid"></i>
					<span class="fs-body">Equipes</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-templates' }" class="link" title="Templates">
					<i class="icon-tag"></i>
					<span class="fs-body">Templates</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-analytics' }" class="link" title="Dashboard">
					<i class="icon-layout"></i>
					<span class="fs-body">Dashboard</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-collaborators' }" class="link" title="Collaborateurs">
					<i class="icon-users"></i>
					<span class="fs-body">Collaborateurs</span>
				</router-link>
			</div>
			<!-- favoris -->
			<div class="top-fav py-8 flex-1 text-greyscale-700">
				<button class="fav-btn text-greyscale-400" title="Favoris">
					<i class="icon-tag"></i>
					<span class="fs-body">Favoris</span>
				</button>
			</div>
		</div>

		<div class="bottom menu-list flex flex-col mt-8">
			<div class="bottom-setting flex flex-col">
				<router-link to="/dashboard/avis" class="link" title="Donner votre avis">
					<i class="icon-message-alt"></i>
					<span class="fs-body">Donne votre avis</span>
				</router-link>
				<router-link to="/dashboard/aide" class="link" title="Aide">
					<i class="icon-circle-help"></i>
					<span class="fs-body">Aide</span>
				</router-link>
			</div>
			<div class="bottom-user"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.sidebar {
		box-sizing: border-box;
		height: 100%;
		width: 232px;
		border-radius: 12px;

		&.collapsed {
			width: 72px;

			.link {
				margin: 0;
				&.active {
					// margin: 0;
				}
				span {
					display: none;
				}
			}
		}

		.menu-list {
			gap: 8px;
		}
		.link {
			will-change: color, background;
			transition-property: color, background;
			transition: 0.3s ease;
			padding: 8px 12px;
			@apply text-greyscale-400;
			border-radius: 8px;
			overflow: hidden;
			i {
				font-size: 20px;
				margin-right: 12px;
			}
			&.router-link-active,
			&.active {
				padding: 8px 14px;
				@apply text-greyscale-white bg-light-20;
				span {
					font-weight: bold !important;
				}
			}
			&:not(&.router-link-active, &.active):hover {
				@apply text-greyscale-white bg-light-40;
				span {
					font-weight: bold !important;
				}
			}
		}
		.top {
			.top-fav {
				box-sizing: border-box;
				border-bottom: 1px solid;
				@apply text-primary-700;
			}
			.top-logo {
				box-sizing: border-box;
				font-size: 28px;
				@apply text-primary-700;
				border-bottom: 1px solid;
				.collapser {
					cursor: pointer;
					font-size: 20px;
					width: fit-content;
					height: fit-content;
				}
			}
			.top-menu {
				border-bottom: 1px solid;
				@apply text-primary-700;
			}
		}
		.bottom {
			.bottom-setting {
				border-bottom: 1px solid;
				@apply text-primary-700;
			}
		}
	}
</style>

<script>
	import { mapMutations, mapState } from "vuex";
	export default {
		name: "Sidebar",
		computed: {
			...mapState(["isSidebarCollapsed", "me", "compagnie"]),
		},
		methods: {
			...mapMutations(["setSidebarCollapsed"]),
			collapseBar() {
				console.log("plp");
				this.setSidebarCollapsed(!this.isSidebarCollapsed);
			},
		},
	};
</script>

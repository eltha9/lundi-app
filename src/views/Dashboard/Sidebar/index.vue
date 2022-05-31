<template>
	<div class="sidebar bg-greyscale-black text-greyscale-400 pt-8 flex flex-col justify-between" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top flex flex-col flex-1">
			<div class="top-logo px-6 pb-6 flex flex-col">
				<div class="flex justify-between items-center mb-1 text-greyscale-200">
					<span>{{ isSidebarCollapsed ? compagnie.name[0] : compagnie.name }}</span>
					<button class="collapser" @click="collapseBar()"><i class="icon-arrow-left"></i></button>
				</div>
				<span class="text-greyscale-400 sato-l-s">Lundi</span>
			</div>
			<div class="top-menu menu-list flex flex-col py-8 px-3">
				<router-link :to="{ name: 'dashboard-home' }" class="link" title="home">
					<i class="icon-home"></i>
					<span class="fs-body">Home</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-teams' }" class="link" title="Equipes">
					<i class="icon-home"></i>
					<span class="fs-body">Equipes</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-templates' }" class="link" title="Templates">
					<i class="icon-document"></i>
					<span class="fs-body">Templates</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-analytics' }" class="link" title="Dashboard">
					<i class="icon-bar-chart-alt"></i>
					<span class="fs-body">Dashboard</span>
				</router-link>
				<router-link :to="{ name: 'dashboard-collaborators' }" class="link" title="Collaborateurs">
					<i class="icon-users"></i>
					<span class="fs-body">Collaborateurs</span>
				</router-link>
			</div>
			<div class="top-fav py-8 flex-1 text-greyscale-700">
				<button class="link-btn text-greyscale-400" title="Favoris">
					<i class="icon-tag"></i>
					<span class="fs-body">Favoris</span>
				</button>
			</div>
		</div>
		<div class="bottom menu-list flex flex-col mt-8">
			<router-link to="/dashboard/avis" class="link" title="Donner votre avis">
				<i class="icon-message-alt"></i>
				<span class="fs-body">Donne votre avis</span>
			</router-link>
			<router-link to="/dashboard/aide" class="link" title="Aide">
				<i class="icon-sun"></i>
				<span class="fs-body">Aide</span>
			</router-link>
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

			.link,
			.link-btn {
				margin: 0;
				&.active {
					margin: 0;
				}
				span {
					display: none;
				}
			}
		}

		.menu-list {
			gap: 8px;
		}
		.link,
		.link-btn {
			will-change: color;
			transition: color 0.2s ease;
			i::before {
				width: 20px;
				height: 20px;
			}
			i {
				margin-right: 12px;
			}
			&.router-link-active,
			&.active {
				@apply text-greyscale-white;
				i {
					margin-right: 24px;
				}
				span {
					font-weight: bold !important;
				}
			}
			&:not(&.router-link-active, &.active):hover {
				@apply text-greyscale-white;
			}
		}
		.top {
			.top-fav {
				box-sizing: border-box;
				border-top: 1px solid;
				border-bottom: 1px solid;
			}
			.top-logo {
				box-sizing: border-box;
				font-size: 28px;
				@apply text-primary-700;
				border-bottom: 1px solid;
				.collapser {
					cursor: pointer;
					font-size: 28px;
				}
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

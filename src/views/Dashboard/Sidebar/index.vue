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
				<router-link :to="{name: 'dashboard-home'}" class="link" title="home">
					<i class="icon-home"></i>
					<span class="sato-l-l">Home</span>
				</router-link>
				<router-link :to="{name: 'dashboard-teams'}" class="link" title="Equipes">
					<i class="icon-grid"></i>
					<span class="sato-l-l">Equipes</span>
				</router-link>
				<router-link :to="{name: 'dashboard-templates'}" class="link" title="Templates">
					<i class="icon-tag"></i>
					<span class="sato-l-l">Templates</span>
				</router-link>
				<router-link :to="{name: 'dashboard-analytics'}" class="link" title="Dashboard">
					<i class="icon-layout"></i>
					<span class="sato-l-l">Dashboard</span>
				</router-link>
				<router-link :to="{name: 'dashboard-collaborators'}" class="link" title="Collaborateurs">
					<i class="icon-users"></i>
					<span class="sato-l-l">Collaborateurs</span>
				</router-link>
			</div>
			<!-- favoris -->
			<div class="top-fav py-6 px-3 flex-1 text-greyscale-700 flex flex-col">
				<button class="fav-btn text-greyscale-500 flex items-center justify-between px-3" title="Favoris" @click="isFavOpen = !isFavOpen">
					<i class="icon-favorite res-icon"></i>
					<span class="sato-l-m">Favoris</span>
					<i class="text-greyscale-400" :class="isFavOpen ? 'icon-caret-up ' : 'icon-caret-down '"></i>
				</button>
				<div v-show="isFavOpen" class="fav-menu flex-1">
					<div class="fav-menu-container">
						<router-link
							v-for="(item, i) in me.settings.favs"
							:key="`${i}-${item.title}`"
							:to="item.link"
							class="sub-link text-greyscale-400 px-6 py-2 mt-2 sato-l-s flex justify-between"
						>
							<span>
								{{ item.title }}
							</span>
							<i class="icon-options-vertical"></i>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom menu-list flex flex-col">
			<div class="bottom-setting flex flex-col py-4 px-3">
				<router-link to="/dashboard/avis" class="link" title="Donner votre avis">
					<i class="icon-message-alt"></i>
					<span class="sato-l-l">Donne votre avis</span>
				</router-link>
				<router-link to="/dashboard/aide" class="link" title="Aide">
					<i class="icon-circle-help"></i>
					<span class="sato-l-l">Aide</span>
				</router-link>
			</div>
			<div class="bottom-user flex justify-between items-center">
				<div class="flex items-center">
					<avatar :url="me.picture" class="mr-4" />
					<span class="sato-p-s text-greyscale-white">{{ getFullName }}</span>
				</div>
				<button>
					<i class="icon-caret-down text-greyscale-200"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.sidebar {
		box-sizing: border-box;
		height: 100%;
		width: 232px;
		border-radius: 12px;

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

				.fav-btn {
					width: 100%;
					i.res-icon {
						font-size: 20px;
						display: none;
					}
					span {
					}
				}
				.fav-menu {
					height: 100%;
					width: 100%;
					overflow: scroll;
					position: relative;
					.fav-menu-container {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;

						.sub-link {
							border-radius: 8px;
							will-change: color, background;
							transition-property: color, background;
							transition: 0.3s ease;
							&.active {
								@apply bg-light-40 text-greyscale-white;
							}
							&:hover {
								@apply bg-light-20 text-greyscale-white;
							}
						}
					}
				}
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
			gap: 0;
			.bottom-setting {
				border-bottom: 1px solid;
				@apply text-primary-700;
			}
			.bottom-user {
				padding: 40px 24px 36px 24px;
			}
		}
		// transition

		// collapse
		&.collapsed {
			width: 72px;

			.link {
				margin: 0;
				span {
					display: none;
				}
			}
		}
	}
</style>

<script>
	import {mapGetters, mapMutations, mapState} from 'vuex';
	import Avatar from '@/components/lundi-uiKit/avatar/Avatar.vue';
	export default {
		name: 'Sidebar',
		components: {
			Avatar,
		},
		data() {
			return {
				isFavOpen: false,
			};
		},
		computed: {
			...mapState(['isSidebarCollapsed', 'me', 'compagnie']),
			...mapGetters(['getFullName']),
		},
		methods: {
			...mapMutations(['setSidebarCollapsed']),
			collapseBar() {
				console.log('plp');
				this.setSidebarCollapsed(!this.isSidebarCollapsed);
			},
		},
	};
</script>

<template>
	<div class="sidebar bg-greyscale-black text-greyscale-400 px-6 py-14 flex flex-col justify-between">
		<div class="top flex flex-col flex-1">
			<div class="top-logo">Lundi</div>
			<div class="top-menu menu-list flex flex-col my-8">
				<router-link to="/dashboard" class="link">
					<i class="icon-home"></i>
					<span class="fs-body">Home</span>
				</router-link>
				<router-link to="/dashboard/equipes" class="link">
					<i class="icon-home"></i>
					<span class="fs-body">Equipes</span>
				</router-link>
				<router-link to="/dashboard/templates" class="link">
					<i class="icon-document"></i>
					<span class="fs-body">Templates</span>
				</router-link>
				<router-link to="/dashboard/suivi" class="link">
					<i class="icon-bar-chart-alt"></i>
					<span class="fs-body">Dashboard</span>
				</router-link>
				<router-link to="/dashboard/collaborateurs" class="link">
					<i class="icon-users"></i>
					<span class="fs-body">Collaborateurs</span>
				</router-link>
			</div>
			<div class="top-fav py-8 flex-1 text-greyscale-700">
				<button class="link-btn text-greyscale-400">
					<i class="icon-tag"></i>
					<span class="fs-body">Favoris</span>
				</button>
			</div>
		</div>
		<div class="bottom menu-list flex flex-col mt-8">
			<router-link to="/dashboard/avis" class="link">
				<i class="icon-message-alt"></i>
				<span class="fs-body">Donne votre avis</span>
			</router-link>
			<router-link to="/dashboard/aide" class="link">
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
		}

		.menu-list {
			gap: 24px;
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
		}
	}
</style>

<script>
	export default {
		name: 'Sidebar',
	};
</script>

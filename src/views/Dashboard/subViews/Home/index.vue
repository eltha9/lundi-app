<template>
	<my-space v-if="role === 'onboardee'" />
	<main v-else class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-bar flex flex-col">
			<nav-header
				:title="compagnie.name"
				:can-fav="false"
				:as-team-option="false"
				right-cta-title="Créer une équipe"
				:asSetting="false"
				@cta="openDialog({ type: 'createTeam' })"
			/>
			<div class="stat-bar mt-6 flex">
				<stat-card
					:stat="{
						name: 'Arrivés en cours',
						mainValue: 43,
						mainUnit: '%',
						secondaryValue: 12,
						secondaryUnit: 'Nouveaux',
						link: 'dashboard-analytics',
					}"
				/>
				<stat-card
					:stat="{
						name: 'Durée moyenne',
						mainValue: 43,
						mainUnit: '%',
						secondaryValue: 72,
						secondaryUnit: 'Jours',
						link: 'dashboard-analytics',
					}"
				/>
				<stat-card
					:stat="{
						name: 'Templates',
						mainValue: 7,
						mainUnit: '',
						secondaryValue: 56,
						secondaryUnit: '',
						link: 'dashboard-analytics',
					}"
				/>
				<stat-card
					:stat="{
						name: 'Employés',
						mainValue: -7,
						mainUnit: '',
						secondaryValue: 3,
						secondaryUnit: '',
						link: 'dashboard-analytics',
					}"
				/>
			</div>
			<div class="teams-container mt-10 flex-1">
				<div class="team-wrapper pb-4">
					<team-card v-for="(team, i) in compagnie.teams" :key="team.id" :team="team" :position="i + 1" />
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
	.top-bar {
		grid-column: 1/13;
		.stat-bar {
			border-bottom: 1px solid #e5e5e5;
			& > div {
				padding: 12px 24px;

				border-right: 1px solid #e5e5e5;
				&:first-child {
					padding-left: 12px;
				}
				&:last-child {
					padding-right: 12px;
					border-right: none;
				}
			}
		}
		.teams-container {
			position: relative;
			width: 100%;
			overflow: auto;
			.team-wrapper {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				gap: 16px;
				row-gap: 16px;
			}
		}
	}
</style>

<script>
	import { mapActions, mapState } from "vuex";
	import NavHeader from "@/views/Dashboard/Header";
	import NavBar from "@/components/lundi-uiKit/NavBar";
	import Btn from "@/components/lundi-uiKit/Button";
	import StatCard from "@/views/Dashboard/components/Stat-card.vue";
	import TeamCard from "@/views/Dashboard/components/Team-card.vue";
	import MySpace from "./My-Space.vue";
	export default {
		name: "DashboardHome",
		components: {
			NavHeader,
			NavBar,
			Btn,
			StatCard,
			TeamCard,
			MySpace,
		},
		computed: {
			...mapState(["isSidebarCollapsed", "compagnie", "role"]),
		},
		data() {
			return {
				subView: "",
			};
		},
		methods: {
			...mapActions(["openDialog"]),
		},
	};
</script>

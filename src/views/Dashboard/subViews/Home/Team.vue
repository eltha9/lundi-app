<template>
	<main v-if="teamData.id" class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-bar flex flex-col">
			<nav-header
				:title="teamData.name"
				:is-fav="teamData.isFav"
				:can-fav="true"
				:as-team-option="true"
				:users="['aze', 'sdf', 'zeeree']"
				right-cta-title="Inviter"
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
			<div class="sub-bar flex justify-between mt-10">
				<nav-bar v-model="subView" :items="['templates', 'membres']" />
				<btn v-if="subView === 'templates'" ternary>
					Créer un template
					<template #right>
						<i class="icon-arrow-right"></i>
					</template>
				</btn>
			</div>
			<div class="sub-view-drawer flex-1 mt-6">
				<div v-if="subView === 'templates'" class="template-container">
					<div class="template-wrapper pb-4">
						<template-card v-for="(template, i) in teamData.templates" :key="template.id" :infos="template" :position="i + 1" />
						<router-link
							:to="{name: 'dashboard-templates-create'}"
							v-if="teamData.templates.length === 0"
							class="no-template-data flex justify-center items-center bg-primary-100 text-primary-300"
						>
							<span class="text-primary-700 sato-l-m"> Créer mon premier template <i class="icon-add ml-2"></i> </span>
						</router-link>
					</div>
				</div>
				<div v-else-if="subView === 'membres'">
					<l-table v-if="teamData.members.length > 0" :headers="memberTableHeader" :items="teamData.members" :showCheckBox="true"></l-table>
					<span v-else class="text-greyscale-700 sato-l-m font-bold">Aucun membre pour le moment.</span>
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
		.sub-bar {
			width: 100%;
		}
		.sub-view-drawer {
			.template-container {
				width: 100%;
				height: 100%;
				position: relative;
				overflow-y: auto;
				.template-wrapper {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					display: grid;
					grid-template-columns: repeat(12, 1fr);
					gap: 16px;
					row-gap: 16px;

					.no-template-data {
						height: 192px;
						border: 1px dashed;
						border-radius: 8px;
						grid-column: 1/5;
					}
				}
			}
		}
	}
</style>

<script>
	import {mapState} from 'vuex';
	import NavHeader from '@/views/Dashboard/Header';
	import NavBar from '@/components/lundi-uiKit/NavBar';
	import Btn from '@/components/lundi-uiKit/Button';
	import StatCard from '@/views/Dashboard/components/Stat-card.vue';
	import TemplateCard from '@/views/Dashboard/components/Template-card.vue';
	import LTable from '@/components/lundi-uiKit/L-Table.vue';
	import {getUserInformation} from '@/lib/utilis.js';
	export default {
		name: 'DashboardHome',
		components: {
			NavHeader,
			NavBar,
			Btn,
			StatCard,
			TemplateCard,
			LTable,
		},
		computed: {
			...mapState(['isSidebarCollapsed', 'compagnie']),
		},
		data() {
			return {
				subView: '',
				teamId: '',
				teamData: {},
				memberTableHeader: [
					{
						name: 'Nom & Prénom',
						key: 'firstName',
						sorted: true,
					},
					{
						name: 'Permission',
						key: 'role',
						sorted: true,
					},
					{
						name: 'Rôle',
						key: 'role',
						sorted: true,
					},
					{
						name: 'Activité',
						key: "Date d'arrivée",
						sorted: true,
					},
				],
			};
		},
		beforeMount() {
			this.teamId = this.$route.params.id;

			this.teamData = {
				id: this.teamId,
				name: 'ma super team',
				isFav: false,
				members: [getUserInformation('ajzge'), getUserInformation('ajzgazee'), getUserInformation('ajzgecxvx')],
				templates: [
					{
						id: 'plop',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'pldqsdop',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilop',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqsdd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs0dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs7dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs4dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs3dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs2dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
					{
						id: 'popipoilopsqs1dd',
						name: 'template test',
						status: 'toAssign',
						lastUpdate: '2022-06-01',
						tags: ['Tout', 'Junior'],
						users: ['a', 'b', 'c'],
					},
				],
			};
		},
	};
</script>

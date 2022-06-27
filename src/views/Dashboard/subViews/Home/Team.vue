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
				:as-setting="false"
				@cta="openDialog({ type: 'invitation', data: { teamId: teamData.id } })"
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
				<btn v-if="subView === 'templates'" ternary @click="$router.push({ name: 'dashboard-templates-create', params: { teamId: teamData.id } })">
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
							:to="{ name: 'dashboard-templates-create' }"
							v-if="teamData.templates.length === 0"
							class="no-template-data flex justify-center items-center bg-primary-100 text-primary-300"
						>
							<span class="text-primary-700 sato-l-m"> Créer mon premier template <i class="icon-add ml-2"></i> </span>
						</router-link>
					</div>
				</div>
				<div v-else-if="subView === 'membres'" class="template-container">
					<l-table
						v-if="teamData.members.length > 0"
						:headers="memberTableHeader"
						:items="teamData.members"
						:showCheckBox="true"
						options
						class="table-wrapper"
					>
						<template #item-name="{ item }">
							<div class="flex">
								<avatar :url="item.profilePic" />
								<div class="flex flex-col justify-between ml-4">
									<span class="sato-l-m text-greyscale-black">{{ item.firstName }} {{ item.lastName }}</span>
									<div class="flex jsutify-between items-center text-greyscale-500 cursor-pointer" @click="copyEmail(item.email)">
										<span class="truncate flex-1 sato-l-s">{{ item.email }}</span>
										<i class="icon-copy text-base ml-2"></i>
									</div>
								</div>
							</div>
						</template>
						<template #item-userPerm="{ item }">
							<role-selection v-model="item.userPerm" />
						</template>
						<template #item-role="{ item }">
							<div class="text-greyscale-500 flex items-center">
								<i class="icon-work mr-1 text-base"></i>
								<span class="sato-l-s font-bold">{{ item.role }}</span>
							</div>
						</template>
						<template #item-lastActivity="{ item }">
							<div class="text-greyscale-500 flex items-center">
								<i class="icon-update mr-1 text-base"></i>
								<span class="sato-l-s font-bold">{{ formatLastActivity(item.lastActivity) }} Jours</span>
							</div>
						</template>
						<template #item-createdDate="{ item }">
							<div class="text-greyscale-500 flex items-center">
								<i class="icon-calendar mr-1 text-base"></i>
								<span class="sato-l-s font-bold">{{ formatArrivalDate(item.createdDate) }}</span>
							</div>
						</template>
						<template #options="{ item }">
							<router-link :to="{ name: 'dashboard-analytics' }">
								<btn ternary icon>
									<i class="icon-arrow-right"></i>
								</btn>
							</router-link>
						</template>
					</l-table>
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
				.table-wrapper {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					padding-bottom: 16px;
				}
			}
		}
	}
</style>

<script>
	import { mapState, mapActions } from "vuex";
	import NavHeader from "@/views/Dashboard/Header";
	import NavBar from "@/components/lundi-uiKit/NavBar";
	import Btn from "@/components/lundi-uiKit/Button";
	import StatCard from "@/views/Dashboard/components/Stat-card.vue";
	import TemplateCard from "@/views/Dashboard/components/Template-card.vue";
	import LTable from "@/components/lundi-uiKit/L-Table.vue";
	import { getUserInformation } from "@/lib/utilis.js";
	import Avatar from "@/components/lundi-uiKit/avatar/Avatar.vue";
	import RoleSelection from "@/views/Dashboard/components/Role-selection.vue";
	export default {
		name: "DashboardHome",
		components: {
			NavHeader,
			NavBar,
			Btn,
			StatCard,
			TemplateCard,
			LTable,
			Avatar,
			RoleSelection,
		},
		computed: {
			...mapState(["isSidebarCollapsed", "compagnie"]),
		},
		data() {
			return {
				subView: "",
				teamId: "",
				teamData: {},
				memberTableHeader: [
					{
						name: "Nom & Prénom",
						key: "name",
						sorted: true,
					},
					{
						name: "Permission",
						key: "userPerm",
						sorted: false,
					},
					{
						name: "Rôle",
						key: "role",
						sorted: true,
					},
					{
						name: "Activité",
						key: "lastActivity",
						sorted: true,
					},
					{
						name: "Date d'arrivée",
						key: "createdDate",
						sorted: true,
					},
				],
			};
		},
		beforeMount() {
			this.teamId = this.$route.params.id;

			this.teamData = {
				id: this.teamId,
				name: "ma super team",
				isFav: false,
				members: [getUserInformation("ajzge"), getUserInformation("ajzgazee"), getUserInformation("ajzgecxvx")],
				templates: [
					{
						id: "plop",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "pldqsdop",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilop",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqsdd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs0dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs7dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs4dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs3dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs2dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
					{
						id: "popipoilopsqs1dd",
						name: "template test",
						status: "toAssign",
						lastUpdate: "2022-06-01",
						tags: ["Tout", "Junior"],
						users: ["a", "b", "c"],
					},
				],
			};
		},
		methods: {
			...mapActions(["openDialog"]),
			formatArrivalDate(date) {
				const toDate = new Date(date);
				let day = toDate.getDate();
				let month = toDate.getMonth();
				let year = toDate.getFullYear().toString().slice(2, 4);

				if (day < 10) day = `0${day}`;
				if (month < 10) month = `0${month}`;

				return `${day}/${month}/${year}`;
			},
			formatLastActivity(date) {
				const todayStamp = parseInt(Date.now() / 1000);
				const templateStamp = parseInt(new Date(date).getTime() / 1000);
				return Math.max(parseInt((todayStamp - templateStamp) / 60 / 60 / 24), 1) || "X";
			},
			copyEmail(email) {
				navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
					if (result.state == "granted" || result.state == "prompt") {
						navigator.clipboard.writeText(email);
					}
				});
			},
		},
	};
</script>

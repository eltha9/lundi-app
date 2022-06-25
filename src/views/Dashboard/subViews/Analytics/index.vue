<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-bar flex flex-col">
			<nav-header
				:title="subView === 'Vue d\'ensemble' ? 'Suivientreprise' : teamData.name"
				:is-fav="teamData.isFav"
				:can-fav="false"
				:as-team-option="subView !== 'Vue d\'ensemble'"
				:users="['aze', 'sdf', 'zeeree']"
				right-cta-title="Inviter"
			/>
			<div class="sub-bar flex justify-between mt-10">
				<nav-bar v-model="subView" :items="['Vue d\'ensemble', 'Vue par équipe']" />
				<div></div>
			</div>
			<div class="sub-view-drawer flex-1 mt-6">
				<div v-if="subView === 'Vue par équipe'" class="flex flex-col">
					<div class="template-container flex justify-between mb-10">
						<graph-card class="flex-1" />
						<div class="stat-container flex-1">
							<simple-stat-card style="grid-column: 1/4" name="Arrivées en cours" subTitle="sur la période" :value="null" valueUnit="nouveaux" />
							<simple-stat-card style="grid-column: 4/7" name="membres" subTitle="Team plop" :value="null" valueUnit="" />
							<simple-stat-card style="grid-column: 1/4" name="Durée moyenne" subTitle="sur la période" :value="null" valueUnit="jours" />
							<simple-stat-card style="grid-column: 4/7" name="Briques complétées" subTitle="sur la période" :value="null" valueUnit="" />
						</div>
					</div>
					<div class="flex-1">
						<div class="onboardee-bar flex justify-between items-center mb-6">
							<div class="onboardee-bar-left flex items-center">
								<h3 class="salva-h3 text-greyscale-black mr-8">Onboardings</h3>
								<div class="onboarding-switch font-bold sato-l-m">
									<span
										class="mr-4 py-2"
										:class="onboardingSwitch === 'enCours' ? 'text-greyscale-black active' : 'text-greyscale-500'"
										@click="onboardingSwitchClick('enCours')"
										>En cours</span
									>
									<span
										class="py-2"
										:class="onboardingSwitch === 'aPreparer' ? 'text-greyscale-black active' : 'text-greyscale-500'"
										@click="onboardingSwitchClick('aPreparer')"
										>A préparer</span
									>
								</div>
							</div>
							<div class="onboardee-bar-right">
								<router-link :to="{ name: 'dashboard-collaborators' }">
									<btn ternary>
										Voir tous les collaborateurs
										<template #right>
											<i class="icon-arrow-right"></i>
										</template>
									</btn>
								</router-link>
							</div>
						</div>
						<l-table
							v-if="teamData.members.length > 0"
							:headers="onboardeeTableHeader"
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
							<template #item-progress="{ item }">
								<l-progress-bar class="w-32" :progress="item.progress" />
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
					</div>
				</div>
				<div v-else-if="subView === 'Vue d\'ensemble'" class="flex flex-col">
					<div class="template-container flex justify-between mb-10">
						<graph-card class="flex-1" />
						<div class="flex-1 flex" style="gap: 16px">
							<div class="small-stat-container flex-1">
								<simple-stat-card
									style="grid-column: 1/4"
									name="Arrivées en cours"
									subTitle="sur la période"
									:value="null"
									valueUnit="nouveaux"
								/>
								<simple-stat-card style="grid-column: 1/4" name="Durée moyenne" subTitle="sur la période" :value="null" valueUnit="jours" />
							</div>
							<div class="flex-1 small-card flex flex-col justify-between">
								<!-- card -->
								<div class="card flex-1 flex flex-col justify-between">
									<div class="top-card flex justify-between items-center">
										<span class="salva-l-l text-greyscale-800">Templates</span>
										<span class="sato-l-l text-semantic-info-500">+7</span>
									</div>
									<div class="bottom flex justify-between items-center">
										<span class="salva-h3 text-greyscale-700">56</span>
										<router-link :to="{ name: 'dashboard-teams' }" class="cursor-pointer">
											<i class="icon-arrow-right text-greyscale-black"></i>
										</router-link>
									</div>
								</div>
								<!-- card -->
								<div class="card flex-1 flex flex-col justify-between">
									<div class="top-card flex justify-between items-center">
										<span class="salva-l-l text-greyscale-800">Employés</span>
										<span class="sato-l-l text-semantic-info-500"></span>
									</div>
									<div class="bottom flex justify-between items-center">
										<span class="salva-h3 text-greyscale-700">56</span>
										<router-link :to="{ name: 'dashboard-teams' }" class="cursor-pointer">
											<i class="icon-arrow-right text-greyscale-black"></i>
										</router-link>
									</div>
								</div>
								<!-- card -->
								<div class="card flex-1 flex flex-col justify-between">
									<div class="top-card flex justify-between items-center">
										<span class="salva-l-l text-greyscale-800 capitalize">équipe</span>
										<span class="sato-l-l text-semantic-info-500">+7</span>
									</div>
									<div class="bottom flex justify-between items-center">
										<span class="salva-h3 text-greyscale-700">56</span>
										<router-link :to="{ name: 'dashboard-teams' }" class="cursor-pointer">
											<i class="icon-arrow-right text-greyscale-black"></i>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex-1">
						<div class="onboardee-bar flex justify-between items-center mb-6">
							<div class="onboardee-bar-left flex items-center">
								<h3 class="salva-h3 text-greyscale-black mr-8">Onboardings</h3>
								<div class="onboarding-switch font-bold sato-l-m">
									<span
										class="mr-4 py-2"
										:class="onboardingSwitch === 'enCours' ? 'text-greyscale-black active' : 'text-greyscale-500'"
										@click="onboardingSwitchClick('enCours')"
										>En cours</span
									>
									<span
										class="py-2"
										:class="onboardingSwitch === 'aPreparer' ? 'text-greyscale-black active' : 'text-greyscale-500'"
										@click="onboardingSwitchClick('aPreparer')"
										>A préparer</span
									>
								</div>
							</div>
							<div class="onboardee-bar-right">
								<router-link :to="{ name: 'dashboard-collaborators' }">
									<btn ternary>
										Voir tous les collaborateurs
										<template #right>
											<i class="icon-arrow-right"></i>
										</template>
									</btn>
								</router-link>
							</div>
						</div>
						<l-table
							v-if="teamData.members.length > 0"
							:headers="onboardeeTableHeader"
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
							<template #item-progress="{ item }">
								<l-progress-bar class="w-32" :progress="item.progress" />
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
					</div>
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
				gap: 16px;
				.stat-container {
					display: grid;
					grid-template-columns: repeat(6, 1fr);
					gap: 16px;
					row-gap: 16px;
				}
				.small-stat-container {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 16px;
					row-gap: 16px;
				}
			}
		}
	}
	.onboarding-switch {
		span {
			cursor: pointer;
			&.active {
				border-bottom: 1px solid;
			}
			&:hover {
				border-bottom: 1px solid;
			}
		}
	}
	.small-card {
		gap: 16px;
		.card {
			@apply text-greyscale-300 bg-greyscale-white;
			border: 1px solid;
			border-radius: 12px;
			padding: 20px 20px 16px 20px;
			.bottom {
				i {
					font-size: 20px;
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
	import GraphCard from "../../components/Stats/Graph-card.vue";
	import SimpleStatCard from "../../components/Stats/Simple-stat-card.vue";
	import LProgressBar from "@/components/lundi-uiKit/L-porgressBar.vue";
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
			GraphCard,
			SimpleStatCard,
			LProgressBar,
		},
		computed: {
			...mapState(["isSidebarCollapsed", "compagnie"]),
		},
		data() {
			return {
				subView: "",
				teamId: "",
				teamData: {},
				onboardingSwitch: "enCours",
				onboardeeTableHeader: [
					{
						name: "Nom & Prénom",
						key: "name",
						sorted: true,
					},
					{
						name: "Progression",
						key: "progress",
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
			onboardingSwitchClick(value) {
				this.onboardingSwitch = value;
			},
		},
	};
</script>

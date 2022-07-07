<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-bar flex flex-col">
			<nav-header
				:title="subView === 'Vue d\'ensemble' ? 'Suivi entreprise' : teamData.name"
				:is-fav="teamData.isFav"
				:can-fav="false"
				:as-team-option="subView !== 'Vue d\'ensemble'"
				:users="subView === 'Vue d\'ensemble' ? plopData : usersTeamIds"
				right-cta-title="Inviter"
				:as-setting="false"
				@cta="openDialog({ type: 'invitation', data: { teamId: teamData.id } })"
			/>
			<div class="sub-bar flex justify-between mt-10">
				<nav-bar v-model="subView" :items="['Vue d\'ensemble', 'Vue par équipe']" />
				<div class="date-picker text-ternary-700 flex px-3 py-2.5 satol-m font-bold">
					<i class="icon-calendar mr-3"></i>
					<div class="fake-label">
						<input v-model="startDate" type="date" name="datePickerStart" id="datePickerStart" onfocus="this.showPicker()" />
						<label for="datePickerStart">
							<span>{{ formatDate(startDate) }}</span>
						</label>
					</div>
					<i class="icon-arrow-right mx-1"></i>
					<div class="fake-label">
						<input v-model="endDate" type="date" name="datePickerEnd" id="datePickerEnd" onfocus="this.showPicker()" />
						<label for="datePickerEnd">
							<span>{{ formatDate(endDate) }}</span>
						</label>
					</div>
				</div>
			</div>
			<div class="sub-view-drawer flex-1 mt-6">
				<div v-if="subView === 'Vue par équipe'" class="flex flex-col h-full">
					<div class="template-container flex justify-between mb-10">
						<graph-card class="flex-1" />
						<div class="stat-container flex-1">
							<simple-stat-card style="grid-column: 1/4" name="Arrivées en cours" subTitle="sur la période" :value="2" valueUnit="nouveaux" />
							<simple-stat-card style="grid-column: 4/7" name="membres" :subTitle="`Team ${teamData.name}`" :value="null" valueUnit="" />
							<simple-stat-card style="grid-column: 1/4" name="Durée moyenne" subTitle="sur la période" :value="72" valueUnit="jours" />
							<simple-stat-card style="grid-column: 4/7" name="Briques complétées" subTitle="sur la période" :value="null" valueUnit="" />
						</div>
					</div>
					<div class="flex-1 flex flex-col">
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
						<div class="flex-1 table-drawer">
							<l-table
								v-if="teamData.members.length > 0"
								:headers="onboardeeTableHeader"
								:items="teamData.members"
								:showCheckBox="true"
								options
								class="table-wrapper w-full"
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
									<router-link
										:to="{
											name: 'dashboard-analytics-team-member',
											params: { id: item.id, teamId: 'plop' },
										}"
									>
										<btn ternary icon>
											<i class="icon-arrow-right"></i>
										</btn>
									</router-link>
								</template>
							</l-table>
						</div>
					</div>
				</div>
				<div v-else-if="subView === 'Vue d\'ensemble'" class="flex flex-col h-full">
					<div class="template-container flex justify-between mb-10">
						<graph-card class="flex-1" />
						<div class="flex-1 flex" style="gap: 16px">
							<div class="small-stat-container flex-1">
								<simple-stat-card
									style="grid-column: 1/4"
									name="Arrivées en cours"
									subTitle="sur la période"
									:value="12"
									valueUnit="nouveaux"
								/>
								<simple-stat-card style="grid-column: 1/4" name="Durée moyenne" subTitle="sur la période" :value="72" valueUnit="jours" />
							</div>
							<div class="flex-1 small-card flex flex-col justify-between">
								<!-- card -->
								<div class="card flex-1 flex flex-col justify-between">
									<div class="top-card flex justify-between items-center">
										<span class="salva-l-l text-greyscale-800">Templates</span>
										<span class="sato-l-l text-semantic-info-500">+1</span>
									</div>
									<div class="bottom flex justify-between items-center">
										<span class="salva-h3 text-greyscale-700">{{ compagnieTempalesNb }}</span>
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
										<span class="salva-h3 text-greyscale-700">{{ employeeCount }}</span>
										<router-link :to="{ name: 'dashboard-teams' }" class="cursor-pointer">
											<i class="icon-arrow-right text-greyscale-black"></i>
										</router-link>
									</div>
								</div>
								<!-- card -->
								<div class="card flex-1 flex flex-col justify-between">
									<div class="top-card flex justify-between items-center">
										<span class="salva-l-l text-greyscale-800 capitalize">équipes</span>
										<span class="sato-l-l text-semantic-info-500">0</span>
									</div>
									<div class="bottom flex justify-between items-center">
										<span class="salva-h3 text-greyscale-700">{{ compagnie.teams.length }}</span>
										<router-link :to="{ name: 'dashboard-teams' }" class="cursor-pointer">
											<i class="icon-arrow-right text-greyscale-black"></i>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex-1 flex flex-col">
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
						<div class="table-drawer flex-1">
							<l-table
								v-if="teamData.members.length > 0"
								:headers="onboardeeTableHeader"
								:items="teamData.members"
								:showCheckBox="true"
								options
								class="table-wrapper w-full"
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
									<router-link
										:to="{
											name: 'dashboard-analytics-team-member',
											params: { id: item.id, teamId: 'plop' },
										}"
									>
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
	.date-picker {
		.fake-label {
			position: relative;
			input {
				opacity: 0;
				z-index: 0;
				position: absolute;
				top: 0;
				left: 0;
				width: 10px;
			}
			label {
				z-index: 30;
			}
		}
	}
	.table-drawer {
		position: relative;
		overflow-y: auto;
		.table-wrapper {
			position: absolute;
			top: 0;
			left: 0;
			padding-bottom: 16px;
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
	import { getUserInformation, getMyTeam } from "@/lib/utilis.js";
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
			compagnieTempalesNb() {
				let temp = 0;
				this.compagnie.teams.map((team) => (temp += team.templates.length));
				return temp;
			},
			employeeCount() {
				let temp = 0;
				this.compagnie.teams.map((team) => (temp += team.users.length));
				return temp;
			},
			usersTeamIds() {
				return this.teamData.members.map((user) => user.id) || [];
			},
		},
		data() {
			return {
				subView: "",
				teamId: "",
				teamData: {},
				onboardingSwitch: "enCours",
				startDate: "2022-01-01",
				endDate: "2022-12-31",
				plopData: [
					"aze",
					"sdf",
					"mate-1",
					"mate-2",
					"mate-3",
					"mate-4",
					"mate-5",
					"mate-6",
					"mate-7",
					"zeeree",
					"a",
					"b",
					"c",
					"d",
					"e",
					"f",
					"g",
					"h",
					"i",
					"j",
				],
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

			// this.teamData = this.compagnie
			this.teamData = getMyTeam("");
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
			formatDate(date) {
				const dateSplit = date.split("-");
				return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
			},
		},
	};
</script>

<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="top-bar flex flex-col">
			<nav-header
				:title="teamData.name"
				:is-fav="teamData.isFav"
				:can-fav="true"
				:as-team-option="true"
				:users="['aze', 'sdf', 'zeeree']"
				right-cta-title="Créer une équipe"
				:as-setting="false"
				@cta="openDialog({ type: 'createTeam' })"
			/>

			<div class="sub-bar flex justify-between mt-10">
				<nav-bar v-model="subView" :items="['employés', 'onboardés']" />
				<div class="flex">
					<role-selection v-model="membersGlobalPermissionModel" bgColor="bg-transparent" textColor="text-ternary-700" capitalize>
						<template #left>
							<i class="icon-user text-xl"></i>
						</template>
					</role-selection>
					<role-selection
						v-model="onboardeePermissionModel"
						bgColor="bg-transparent"
						textColor="text-ternary-700"
						capitalize
						:items="['Tout', 'Design', 'Dev front', 'Dev back', 'Market']"
						class="ml-4"
					>
						<template #left>
							<i class="icon-work text-xl"></i>
						</template>
					</role-selection>
				</div>
			</div>
			<div class="sub-view-drawer flex-1 mt-6">
				<div v-if="subView === 'employés'" class="template-container">
					<l-table
						v-if="teamData.members.length > 0"
						:headers="memberTableHeader"
						:items="teamData.members"
						:showCheckBox="true"
						class="template-wrapper"
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
						<template #item-team="{ item }">
							<div class="text-greyscale-500 flex items-center">
								<i class="icon-work mr-1 text-base"></i>
								<span class="sato-l-s font-bold">My team</span>
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
					</l-table>
					<span v-else class="text-greyscale-700 sato-l-m font-bold">Aucun membre pour le moment.</span>
				</div>
				<div v-else-if="subView === 'onboardés'" class="template-container">
					<l-table
						v-if="teamData.members.length > 0"
						:headers="memberTableHeader"
						:items="teamData.members"
						:showCheckBox="true"
						options
						class="template-wrapper"
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
						<template #item-team="{ item }">
							<div class="text-greyscale-500 flex items-center">
								<i class="icon-work mr-1 text-base"></i>
								<span class="sato-l-s font-bold">My team</span>
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
					padding-bottom: 16px;
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
	import { mapActions, mapState } from "vuex";
	import NavHeader from "@/views/Dashboard/Header";
	import NavBar from "@/components/lundi-uiKit/NavBar";
	import Btn from "@/components/lundi-uiKit/Button";
	import StatCard from "@/views/Dashboard/components/Stat-card.vue";
	import TemplateCard from "@/views/Dashboard/components/Template-card.vue";
	import LTable from "@/components/lundi-uiKit/L-Table.vue";
	import { getUserInformation } from "@/lib/utilis.js";
	import Avatar from "@/components/lundi-uiKit/avatar/Avatar.vue";
	import RoleSelection from "@/views/Dashboard/components/Role-selection.vue";
	import SimpleSelection from "@/views/Dashboard/components/Simple-selection.vue";
	import { ROLES } from "@/lib/config";
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
			SimpleSelection,
		},
		computed: {
			...mapState(["isSidebarCollapsed", "compagnie"]),
		},
		data() {
			return {
				subView: "",
				teamId: "",
				teamData: {},
				membersGlobalPermissionModel: ROLES[1].value,
				onboardeePermissionModel: "",
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
						name: "Equipe",
						key: "team",
						sorted: false,
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
			this.teamId = "plop";

			this.teamData = {
				id: this.teamId,
				name: "ma super team",
				isFav: false,
				members: [
					{
						firstName: "A",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "d@gmail.com",
						role: "Lead a",
						userPerm: "admin",
						lastActivity: "2022-05-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "hkj",
					},
					{
						firstName: "B",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "e@gmail.com",
						role: "Lead b",
						userPerm: "admin",
						lastActivity: "2022-06-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: ",;n,;",
					},
					{
						firstName: "C",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead c",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
					{
						firstName: "J",
						lastName: "Dos santos",
						profilePic: "/assets/test/avatar.jpeg",
						email: "f@gmail.com",
						role: "Lead O",
						userPerm: "admin",
						lastActivity: "2022-03-20",
						createdDate: "2022-03-02",
						progress: 50,
						id: "oiuytrezertyui",
					},
				],
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

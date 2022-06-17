<template>
	<div class="p-6">
		<div class="text-semantic-positive-500 bg-background-100">
			<span>test view</span>
			<div>
				<Avatar large />
				<AvatarStack :users="['a', 'z', 'e', 'r', 't', 'y']" />
				<Btn color="semantic-info" icon secondary> <i class="icon-call"></i></Btn>
				<Btn color="semantic-warning" secondary class="mb-2"> test secondary</Btn>
				<Btn color="ternary" primary class="mb-2"> test primary</Btn>
				<Btn color="ternary" ternary class="mb-2">
					<span>right ternary</span>
					<template #right> <i class="icon-arrow-right"></i> </template>
				</Btn>
				<Btn color="ternary" ternary class="mb-2" disabled> ternary</Btn>

				<Btn color="semantic-info" icon ternary class="mb-2" disabled> <i class="icon-call"></i></Btn>

				<div>icon <i class="icon-call text-secondary-500"></i></div>
			</div>
			<router-link to="/dashboard">Go to dashboard</router-link>
			<div class="sato-p-xs">test de text</div>

			<span>navbar test</span>
			<nav-bar v-model="navBarTest" :items="['gauche', 'droite', 'en bas', 'en haut']" />

			<!-- test input -->
			<div class="mt-8">
				<h3>input test</h3>
				<l-select v-model="selectModel" name="test" :options="['a', 'b', 'c']" />
				<l-input v-model="textModel" name="test" class="mt-4" />
				<l-input v-model="passwordModel" name="Mot de passe" type="password" class="mt-4" />
				<l-input v-model="phoneModel" name="numéro de téléphone" type="phone" class="mt-4" />
				<l-file class="mt-4" placeholder="votre photo" v-model="fileModel" />
				<l-checkbox class="mt-4" v-model="checkBoxModel" />
			</div>

			<h2 class="salva-h2 text-greyscale-black mt-8">test card</h2>
			<div class="mt-2">
				<h3>employee card</h3>
				<div class="main-view">
					<employee-card />
				</div>

				<h3>employee template card</h3>
				<div class="main-view">
					<employee-template-card />
				</div>

				<h3>stat card</h3>
				<div class="main-view">
					<stat-card />
				</div>

				<h3>team card</h3>
				<div class="main-view">
					<team-card />
				</div>

				<h3>template card</h3>
				<div class="main-view template-card-test">
					<template-card
						:infos="{
							name: 'template test',
							status: 'toAssign',
							lastUpdate: '2022-06-01',
							tags: ['Tout', 'Junior'],
							users: ['a', 'b', 'c'],
						}"
						:position="1"
					/>
					<template-card
						:infos="{
							name: 'template test',
							status: 'toAssign',
							lastUpdate: '2022-06-01',
							tags: ['Tout', 'Junior'],
							users: ['a', 'b', 'c'],
						}"
						:position="2"
					/>
					<template-card
						:infos="{
							name: 'template test',
							status: 'toAssign',
							lastUpdate: '2022-06-01',
							tags: ['Tout', 'Junior'],
							users: ['a', 'b', 'c'],
						}"
						:position="3"
					/>
					<template-card
						:infos="{
							name: 'template test',
							status: 'toAssign',
							lastUpdate: '2022-06-01',
							tags: ['Tout', 'Junior'],
							users: ['a', 'b', 'c'],
						}"
						:position="4"
					/>
					<template-card
						:infos="{
							name: 'template test',
							status: 'toAssign',
							lastUpdate: '2022-06-01',
							tags: ['Tout', 'Junior'],
							users: ['a', 'b', 'c'],
						}"
						:position="5"
					/>
				</div>

				<h3>contexted stat card</h3>
				<div class="main-view">
					<contexted-stat-card />
				</div>

				<h3>graph card</h3>
				<div class="main-view">
					<graph-card />
				</div>

				<h3>simple stat card</h3>
				<div class="main-view">
					<simple-stat-card />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.template-card-test {
		row-gap: 16px;
	}
</style>

<script>
	import Avatar from "@/components/lundi-uiKit/avatar/Avatar";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack";
	import Btn from "@/components/lundi-uiKit/Button";
	import NavBar from "@/components/lundi-uiKit/NavBar";
	import LSelect from "@/components/lundi-uiKit/inputs/L-select.vue";
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	//card test
	import EmployeeCard from "@/views/Dashboard/components/Employee-card.vue";
	import EmployeeTemplateCard from "@/views/Dashboard/components/Employee-template-card.vue";
	import StatCard from "@/views/Dashboard/components/Stat-card.vue";
	import TeamCard from "@/views/Dashboard/components/Team-card.vue";
	import TemplateCard from "@/views/Dashboard/components/Template-card.vue";

	import ContextedStatCard from "@/views/Dashboard/components/Stats/Contexted-stat-card.vue";
	import GraphCard from "@/views/Dashboard/components/Stats/Graph-card.vue";
	import SimpleStatCard from "@/views/Dashboard/components/Stats/Simple-stat-card.vue";

	export default {
		name: "Test",
		components: {
			Avatar,
			AvatarStack,
			Btn,
			NavBar,
			LSelect,
			LInput,
			LFile,
			LCheckbox,
			// cardTest
			EmployeeCard,
			EmployeeTemplateCard,
			StatCard,
			TeamCard,
			TemplateCard,

			ContextedStatCard,
			GraphCard,
			SimpleStatCard,
		},
		data() {
			return {
				navBarTest: "",
				selectModel: "",
				textModel: "",
				passwordModel: "",
				phoneModel: "",
				fileModel: "",
				checkBoxModel: true,
			};
		},
		watch: {
			textModel() {
				console.log(this.selectModel);
			},
		},
	};
</script>

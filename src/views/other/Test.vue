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
			<l-progress-bar :progress="100" />
			<!-- test input -->
			<div class="mt-8">
				<h3 class="salva-h2">input test</h3>
				<l-select v-model="selectModel" name="test" :options="['a', 'b', 'c']" />
				<l-input v-model="textModel" name="test" class="mt-4" />
				<l-input v-model="passwordModel" name="Mot de passe" type="password" class="mt-4" />
				<l-input v-model="phoneModel" name="numéro de téléphone" type="phone" class="mt-4" />
				<l-file class="mt-4" placeholder="votre photo" v-model="fileModel" />
				<l-checkbox class="mt-4" v-model="checkBoxModel" />
			</div>

			<h2 class="salva-h2 text-greyscale-black mt-8">test card</h2>
			<div class="mt-2">
				<h3 class="salva-h2">employee card</h3>
				<div class="main-view">
					<employee-card user-id="plop" :position="1" />
					<employee-card user-id="plop" :position="2" />
					<employee-card user-id="plop" :position="3" />
					<employee-card user-id="plop" :position="4" />
					<employee-card user-id="plop" :position="5" />
					<employee-card user-id="plop" :position="6" />
					<employee-card user-id="plop" :position="7" />
				</div>

				<h3 class="salva-h2">employee template card</h3>
				<div class="main-view template-card-test">
					<employee-template-card
						:template="{
							id: 'ahzgeja',
							name: 'temlate name',
							lastUpdate: '2022-03-02',
							progress: 20,
							teamName: 'team design',
						}"
						:position="1"
					/>
					<employee-template-card
						:template="{
							id: 'ahzgeja',
							name: 'temlate name',
							lastUpdate: '2022-03-02',
							progress: 80,
							teamName: 'team design',
						}"
						:position="2"
					/>
					<employee-template-card
						:template="{
							id: 'ahzgeja',
							name: 'temlate name',
							lastUpdate: '2022-03-02',
							progress: 45,
							teamName: 'team design',
						}"
						:position="3"
					/>
					<employee-template-card
						:template="{
							id: 'ahzgeja',
							name: 'temlate name',
							lastUpdate: '2022-03-02',
							progress: 90,
							teamName: 'team design',
						}"
						:position="4"
					/>
				</div>

				<h3 class="salva-h2">stat card</h3>
				<div class="flex gap-6 px-3">
					<stat-card
						:stat="{
							name: 'arrové',
							mainValue: 21,
							mainUnit: '%',
							secondaryValue: 78,
							secondaryUnit: 'nouveau',
							link: 'dashboard-analytics',
						}"
					/>
					<stat-card
						:stat="{
							name: 'arrové',
							mainValue: -21,
							mainUnit: '',
							secondaryValue: -5,
							secondaryUnit: 'nouveau',
							link: 'dashboard-analytics',
						}"
					/>
					<stat-card
						:stat="{
							name: 'arrové',
							mainValue: -21,
							mainUnit: '',
							secondaryValue: -5,
							secondaryUnit: 'nouveau',
							link: 'dashboard-analytics',
						}"
					/>
					<stat-card
						:stat="{
							name: 'arrové',
							mainValue: -21,
							mainUnit: '',
							secondaryValue: -5,
							secondaryUnit: 'nouveau',
							link: 'dashboard-analytics',
						}"
					/>
				</div>

				<h3 class="salva-h2">team card</h3>
				<div class="main-view template-card-test">
					<team-card
						:team="{
							id: 'geayrgor',
							name: 'First Team',
							isFav: true,
							lastUpdate: '2022-05-23',
							users: ['4', '5'],
						}"
						:position="1"
					/>
					<team-card
						:team="{
							id: 'geayrgor',
							name: 'First Team',
							isFav: true,
							lastUpdate: '2022-05-23',
							users: ['4', '5'],
						}"
						:position="2"
					/>
					<team-card
						:team="{
							id: 'geayrgor',
							name: 'First Team',
							isFav: false,
							lastUpdate: '2022-05-23',
							users: ['4', '5'],
						}"
						:position="3"
					/>
					<team-card
						:team="{
							id: 'geayrgor',
							name: 'First Team',
							isFav: true,
							lastUpdate: '2022-05-23',
							users: ['4', '5'],
						}"
						:position="4"
					/>
				</div>

				<h3 class="salva-h2">template card</h3>
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

				<h3 class="salva-h2">graph card</h3>
				<div class="main-view">
					<graph-card />
				</div>

				<h3 class="salva-h2">simple stat card</h3>
				<div class="main-view">
					<simple-stat-card class="plop" name="arriver" subTitle="un sous titre" :value="2" valueUnit="jours" :tendency="56" />
					<simple-stat-card
						class="plop"
						name="arriver"
						subTitle="un sous titre"
						:value="2"
						valueUnit="jours"
						link="azeoaze"
						:currentChange="6"
					/>
				</div>
			</div>

			<h3>Table test</h3>
			<l-table
				:headers="[
					{
						name: 'plop',
						key: 'plop',
						sorted: true,
					},
					{
						name: 'plap',
						key: 'plap',
						sorted: true,
					},
					{
						name: 'plep',
						key: 'plep',
						sorted: true,
					},
				]"
				:items="[
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
					{
						plop: '1',
						plap: 'x2',
						plep: '3',
					},
				]"
				:showCheckBox="true"
			>
				<template #item-plap="{item}"> je suis {{ item.palp }} </template>
			</l-table>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.template-card-test {
		row-gap: 16px;
	}
	.plop {
		grid-column: 1/4;
	}
</style>

<script>
	import Avatar from '@/components/lundi-uiKit/avatar/Avatar';
	import AvatarStack from '@/components/lundi-uiKit/avatar/AvatarStack';
	import Btn from '@/components/lundi-uiKit/Button';
	import NavBar from '@/components/lundi-uiKit/NavBar';
	import LSelect from '@/components/lundi-uiKit/inputs/L-select.vue';
	import LInput from '@/components/lundi-uiKit/inputs/L-input.vue';
	import LFile from '@/components/lundi-uiKit/inputs/L-file.vue';
	import LCheckbox from '@/components/lundi-uiKit/inputs/L-checkbox.vue';
	import LProgressBar from '@/components/lundi-uiKit/L-porgressBar.vue';
	//card test
	import EmployeeCard from '@/views/Dashboard/components/Employee-card.vue';
	import EmployeeTemplateCard from '@/views/Dashboard/components/Employee-template-card.vue';
	import StatCard from '@/views/Dashboard/components/Stat-card.vue';
	import TeamCard from '@/views/Dashboard/components/Team-card.vue';
	import TemplateCard from '@/views/Dashboard/components/Template-card.vue';

	import GraphCard from '@/views/Dashboard/components/Stats/Graph-card.vue';
	import SimpleStatCard from '@/views/Dashboard/components/Stats/Simple-stat-card.vue';

	// table test
	import LTable from '@/components/lundi-uiKit/L-Table.vue';

	export default {
		name: 'Test',
		components: {
			Avatar,
			AvatarStack,
			Btn,
			NavBar,
			LSelect,
			LInput,
			LFile,
			LCheckbox,
			LProgressBar,
			// cardTest
			EmployeeCard,
			EmployeeTemplateCard,
			StatCard,
			TeamCard,
			TemplateCard,

			GraphCard,
			SimpleStatCard,
			LTable,
		},
		data() {
			return {
				navBarTest: '',
				selectModel: '',
				textModel: '',
				passwordModel: '',
				phoneModel: '',
				fileModel: '',
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

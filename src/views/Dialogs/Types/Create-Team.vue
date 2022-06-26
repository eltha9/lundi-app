<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div class="content">
			<h3 class="salva-h3 text-greyscale-black mb-4">Créez une nouvelle équipe</h3>
			<p class="sato-p-l text-greyscale-700 mb-8">un text d'explication</p>

			<div>
				<l-input v-model="teamNameModel" name="Nom de l'équipe" class="mt-8" @enter="addTeamName()" />
				<div v-if="team.name !== undefined" class="created-team flex justify-between items-center mt-4">
					<div class="flex-1 team-name p-4 flex items-center" :class="team.selected ? 'text-primary-500 bg-primary-100' : 'text-greyscale-300'">
						<l-checkbox v-model="team.selected" name="createdTeam" class="mr-3" />
						<span class="salva-l-m" :class="team.selected ? 'text-primary-500' : 'text-greyscale-black'">{{ team.name }}</span>
					</div>
					<btn ternary icon @click="resetTeam()" class="mx-3">
						<i class="icon-close text-greyscale-black"></i>
					</btn>
				</div>
			</div>
		</div>
		<div class="bottom-cta flex justify-between">
			<btn class="flex-1" @click="closeDialog()" secondary>Annuler</btn>
			<btn class="flex-1" @click="create()" primary :disabled="isCreateDisable">Créer l'équipe</btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.bottom-cta {
		gap: 16px;
	}
	.created-team {
		.team-name {
			border: 1px solid;
			border-radius: 8px;
			cursor: pointer;
		}
		i {
			cursor: pointer;
			font-size: 28px;
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import { mapActions } from "vuex";
	export default {
		components: {
			Btn,
			LInput,
			LCheckbox,
		},
		data() {
			return {
				teamNameModel: "",
				team: {
					name: undefined,
					selected: false,
				},
			};
		},
		computed: {
			isCreateDisable() {
				return !(this.team.name && this.team.selected);
			},
		},
		methods: {
			...mapActions(["closeDialog", "createTeam"]),
			create() {
				if (!this.isCreateDisable) this.createTeam(this.team.name);
			},
			addTeamName() {
				if (this.teamNameModel.trim() === "") return;
				this.team.name = this.teamNameModel;
				this.team.selected = true;
				this.teamNameModel = "";
			},
			resetTeam() {
				this.team = { name: undefined, selected: false };
			},
		},
	};
</script>

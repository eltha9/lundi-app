<template>
	<div class="create-account-step2">
		<div class="step-title salva-h3 text-greyscale-800 mb-3">Créez ou rejoignez votre équipe</div>
		<div class="sato-l-l text-greeyscale-700 mb-8">
			Sélectionnez ou crée l’équipe métier qui correspond à votre poste pour contribuer à la création et à l’amélioration des oboardings de votre
			entreprise.
		</div>
		<div class="team-container">
			<div class="create-team mb-8">
				<span class="text-greyscale-700 sato-l-l">Créer mon équipe</span>
				<l-input v-model="teamCreation" name="Nom de l'équipe" class="mt-8" @enter="createTeam" />
				<!-- created team -->
				<div v-if="data.createdTeam.name !== undefined" class="created-team flex justify-between items-center mt-4">
					<div class="flex-1 team-name bg-primary-100 text-primary-500 p-4 flex items-center">
						<input type="checkbox" :checked="data.createdTeam.selected" class="mr-3" />
						<span class="salva-l-m text-primary-500">{{ data.createdTeam.name }}</span>
					</div>
					<i class="icon-close text-greyscale-black mx-3" @click="data.createdTeam = {}"></i>
				</div>
			</div>

			<div v-if="compagnie.teams.length > 0" class="join-team">
				<span class="text-greyscale-700 sato-l-l">Rejoindre mon équipe</span>
				<div class="teams mt-4 flex flex-wrap justify-between">
					<div
						v-for="team in compagnie.teams"
						:key="team.id"
						:class="data.selectedTeam === team.id ? 'selected' : ''"
						class="team mb-3 flex justify-between items-center text-primary-500 bg-primary-100 py-3 px-4"
					>
						<div class="flex items-center">
							<input type="checkbox" :checked="data.selectedTeam === team.id" class="mr-3" />
							<span>{{ team.name }}</span>
						</div>
						<avatar-stack :user-limit="2" :users="team.users" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between mt-14">
			<btn :disabled="isDisable" @click.native="previousStep(1)" secondary>
				<template #left> <i class="icon-arrow-left"></i> </template>
				Retour
			</btn>
			<btn :disabled="isDisable" @click.native="nextStep(3)">
				<template #right> <i class="icon-arrow-right"></i> </template>
				Suivant
			</btn>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-step2 {
		height: fit-content;
		grid-column: 4/10;

		.team-container {
			.create-team {
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
			}

			.join-team {
				.teams {
					gap: 16px;
					.team {
						border: 1px solid;
						border-radius: 8px;
						width: 50%;
					}
				}
			}
		}
	}
</style>
<script>
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack.vue";
	import { mapState, mapMutations } from "vuex";
	export default {
		components: {
			LInput,
			Btn,
			AvatarStack,
		},
		props: {
			value: {
				require: true,
				type: Object,
				default: () => {
					return {
						createdTeam: {},
						selectedTeam: "",
					};
				},
			},
		},
		data() {
			return {
				data: { createdTeam: {}, selectedTeam: "" },
				teamCreation: "",
			};
		},
		computed: {
			...mapState(["me", "compagnie"]),
			isDisable() {
				return false;
				if (this.data.compagnieName.trim() === "") return true;
				if (this.data.logo === null) return true;
				return false;
			},
		},
		mounted() {
			this.data = this.value;
			console.log(this.compagnie);
		},
		methods: {
			...mapMutations(["setTimeLineStep"]),
			nextStep(nb) {
				if (this.isDisable) return;
				this.setTimeLineStep(nb);
			},
			previousStep(nb) {
				this.setTimeLineStep(nb);
			},
			createTeam() {
				const team = {
					name: this.teamCreation,
					selected: true,
				};
				this.data.createdTeam = team;
				this.teamCreation = "";
			},
		},
	};
</script>

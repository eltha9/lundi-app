<template>
	<div class="create-account-step2">
		<div class="step-title salva-h3 text-greyscale-800 mb-6">Configurez votre entreprise</div>
		<l-input v-model="data.sector" name="Nom de votre entreprise" class="mb-8" />
		<div class="size">
			<span>Quelle est la taille de votre entreprise ?</span>
			<div class="size-choices mt-4">
				<div class="choices-row flex justify-between mb-4">
					<div @click="selectChoice(0)" class="choice flex-1" :class="data.size === choices[0] ? 'active' : ''">
						<span>{{ choices[0] }}</span>
					</div>
					<div @click="selectChoice(1)" class="choice flex-1" :class="data.size === choices[1] ? 'active' : ''">
						<span>{{ choices[1] }}</span>
					</div>
				</div>
				<div class="choices-row flex justify-between">
					<div @click="selectChoice(2)" class="choice flex-1" :class="data.size === choices[2] ? 'active' : ''">
						<span>{{ choices[2] }}</span>
					</div>
					<div @click="selectChoice(3)" class="choice flex-1" :class="data.size === choices[3] ? 'active' : ''">
						<span>{{ choices[3] }}</span>
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
		.size {
			.size-choices {
				.choices-row {
					gap: 16px;
					.choice {
						@apply text-greyscale-300 bg-greyscale-white;
						cursor: pointer;
						border-radius: 8px;
						border: 1px solid;
						width: 50%;
						height: 112px;
						display: flex;
						align-items: center;
						justify-content: center;
						span {
							@apply text-greyscale-black;
						}
						&.active {
							@apply text-primary-500 bg-primary-100;
							span {
								@apply text-primary-700;
							}
						}
						&:hover {
							@apply text-greyscale-700;
						}
					}
				}
			}
		}
	}
</style>
<script>
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import { mapState, mapMutations } from "vuex";
	export default {
		components: {
			LInput,
			Btn,
		},
		props: {
			value: {
				require: true,
				type: Object,
				default: () => {
					return {
						sector: "",
						size: "",
					};
				},
			},
		},
		data() {
			return {
				data: { sector: "", size: "" },
				choices: ["1 à 10 personnes", "10 à 50 personnes", "50 à 200 personnes", "Plus de 200 personnes"],
			};
		},
		computed: {
			...mapState(["me"]),
			isDisable() {
				return false;
				if (this.data.compagnieName.trim() === "") return true;
				if (this.data.logo === null) return true;
				return false;
			},
		},
		mounted() {
			this.data = this.value;
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
			selectChoice(id) {
				this.data.size = this.choices[id];
			},
		},
	};
</script>

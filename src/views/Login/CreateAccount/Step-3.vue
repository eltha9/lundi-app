<template>
	<div class="create-account-step3">
		<div class="step-title salva-h3 text-greyscale-800 mb-8">Créez les équipes de votre entreprise</div>

		<div>
			<span>Ajouter une équipe</span>
			<div>
				<l-input v-model="data.name" name="Nom de l'équipe" class="mb-8" />
				<div class="tags">
					<div class="tag">RH</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between mt-14">
			<btn :disabled="isDisable" @click.native="previousStep(2)" secondary>
				<template #left> <i class="icon-arrow-left"></i> </template>
				Retour
			</btn>
			<btn :disabled="isDisable" @click.native="nextStep(4)">
				<template #right> <i class="icon-arrow-right"></i> </template>
				Suivant
			</btn>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-step3 {
		height: fit-content;
		grid-column: 4/10;
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
						name: "",
						tags: [],
					};
				},
			},
		},
		data() {
			return {
				data: { name: "", tags: [] },
				tags: ["RH", "Sales", "Finances", "Data", "Tech", "Produit", "Management"],
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
			selectTag(id) {},
		},
	};
</script>

<template>
	<div class="create-account-step3">
		<div class="step-title salva-h3 text-greyscale-800 mb-8">Créez les équipes de votre entreprise</div>

		<div>
			<span>Ajouter une équipe</span>
			<div class="mt-4">
				<l-input v-model="data.name" name="Nom de l'équipe" class="mb-8" />
				<div class="tags flex">
					<div
						v-for="tagValue in tags"
						class="tag"
						:key="tagValue"
						:class="data.tags.includes(tagValue) ? 'active' : ''"
						@click="selectTag(tagValue)"
					>
						<span class="sato-l-m"> <i :class="data.tags.includes(tagValue) ? 'icon-check' : 'icon-add'"></i> {{ tagValue }} </span>
					</div>
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

		.tags {
			gap: 8px;
			.tag {
				cursor: pointer;
				@apply text-greyscale-400;
				border: 1px solid;
				padding: 8px 16px 8px 12px;
				border-radius: 34px;
				span {
					@apply text-greyscale-500;
					font-weight: bold;
					i {
						margin-right: 8px;
						font-size: 16px;
					}
				}
				&.active {
					@apply text-primary-500 bg-primary-100;
					span {
						@apply text-primary-500;
					}
				}
				&:hover {
					@apply text-greyscale-black;
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
			selectTag(tagName) {
				if (this.data.tags.includes(tagName)) {
					this.data.tags = this.data.tags.filter((tag) => tag !== tagName);
				} else {
					this.data.tags.push(tagName);
				}
			},
		},
	};
</script>

<template>
	<div class="create-account-step1">
		<div class="step-title salva-h3 text-primary-500">Bienvenue {{ me.firstName }} !</div>
		<div class="step-subtitle text-greyscale-700 sato-l-l mb-8">
			Pour une expérience optimale avec vos collaborateurs, vous devez personaliser le compte de votre entreprise.
		</div>
		<l-input v-model="data.compagnieName" name="Nom de votre entreprise" class="mb-8" />
		<l-file v-model="data.logo" placeholder="votre logo" :accepted-file-types="['png', 'jpg', 'jpeg']" />
		<div class="flex justify-end mt-14">
			<btn :disabled="isDisable" @click.native="nextStep(2)">
				<template #right> <i class="icon-arrow-right"></i> </template>
				Suivant
			</btn>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-step1 {
		height: fit-content;
		grid-column: 4/10;
	}
</style>
<script>
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import { mapState, mapMutations } from "vuex";
	export default {
		components: {
			LInput,
			LFile,
			Btn,
		},
		props: {
			value: {
				require: true,
				type: Object,
				default: () => {
					return {
						compagnieName: "",
						logo: null,
					};
				},
			},
		},
		data() {
			return {
				data: { compagnieName: "", logo: null },
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
		},
	};
</script>

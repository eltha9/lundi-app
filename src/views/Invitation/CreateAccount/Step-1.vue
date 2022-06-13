<template>
	<div class="create-account-step1">
		<div class="step-title salva-h3 text-greyscale-800 mb-3">Personnalisez votre compte</div>
		<div class="step-subtitle text-greyscale-700 sato-l-l mb-8">
			Ajouter une photo et rensignez votre rôle afin que les membres de votre équipe puisse vous reconaitre
		</div>
		<l-file v-model="data.profilePicture" placeholder="votre photo" :accepted-file-types="['png', 'jpg', 'jpeg']" class="mb-8" />
		<l-input v-model="data.role" name="Renseignez votre rôle" />
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
						role: "",
						profilePicture: null,
					};
				},
			},
		},
		data() {
			return {
				data: { role: "", profilePicture: null },
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
